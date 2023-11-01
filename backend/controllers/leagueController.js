import slugify from "slugify";
import fs from "fs";

import leagueModel from "../models/leagueModel.js";

export const createLeagueController = async (req, res) => {
  try {
    const { leaname, leashort } = req.fields;

    const { photo } = req.files;
    //alidation
    switch (true) {
      case !leaname:
        return res.status(500).send({ error: "league name is Required" });
      case !leashort:
        return res.status(500).send({ error: "leashort is Required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const league = new leagueModel({
      ...req.fields,
      slug: slugify(leaname, { lower: true }),
    });
    if (photo) {
      league.photo.data = fs.readFileSync(photo.path);
      league.photo.contentType = photo.type;
    }

    await league.save();
    res.status(201).send({
      success: true,
      message: "league Created Successfully",
      league,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creation of league",
    });
  }
};

export const getLeagueController = async (req, res) => {
  try {
    const league = await leagueModel.find({}).select("-photo");
    res.status(200).send({
      success: true,
      message: "All league",
      league,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting of league",
    });
  }
};

export const leaguePhotoController = async (req, res) => {
  try {
    const league = await leagueModel.findById(req.params.pid).select("photo");
    if (league.photo.data) {
      res.set("Content-type", league.photo.contentType);
      return res.status(200).send(league.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in getting picture",
    });
  }
};

//update

export const updateLeagueController = async (req, res) => {
  try {
    const { leaname, leashort } = req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !leaname:
        return res.status(500).send({ error: "leaname is Required" });
      case !leashort:
        return res.status(500).send({ error: "leashort is Required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const league = await leagueModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(leaname) },
      { new: true }
    );
    if (photo) {
      league.photo.data = fs.readFileSync(photo.path);
      league.photo.contentType = photo.type;
    }
    await league.save();
    res.status(201).send({
      success: true,
      message: "league Updated Successfully",
      league,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updation of league",
    });
  }
};

//delete
export const deleteLeagueController = async (req, res) => {
  try {
    await leagueModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "league deleted success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in deleting league",
    });
  }
};
