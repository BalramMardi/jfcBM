import slugify from "slugify";
import fs from "fs";

import teamsModel from "../models/teamsModel.js";

export const createTeamsController = async (req, res) => {
  try {
    const { teamname, stadium, shortname } = req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !teamname:
        return res.status(500).send({ error: "Name is Required" });
      case !stadium:
        return res.status(500).send({ error: "number is Required" });
      case !shortname:
        return res.status(500).send({ error: "number is Required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const teams = new teamsModel({ ...req.fields, slug: slugify(teamname) });
    if (photo) {
      teams.photo.data = fs.readFileSync(photo.path);
      teams.photo.contentType = photo.type;
    }

    await teams.save();
    res.status(201).send({
      success: true,
      message: "teams Created Successfully",
      teams,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creation of teams",
    });
  }
};

export const getTeamsController = async (req, res) => {
  try {
    const teams = await teamsModel
      .find({})
      .select("-photo")
      .sort({ popular: -1 });
    res.status(200).send({
      success: true,
      message: "All teams",
      total: teams.length,
      teams,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting of teams",
    });
  }
};

export const getSingleTeamController = async (req, res) => {
  try {
    const teams = await teamsModel
      .findOne({ slug: req.params.slug })
      .select("-photo");
    res.status(200).send({
      success: true,
      message: "single teams get Successfully",
      teams,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting single teams",
      error: error.message,
    });
  }
};

export const teamsPhotoController = async (req, res) => {
  try {
    const teams = await teamsModel.findById(req.params.pid).select("photo");
    if (teams.photo.data) {
      res.set("Content-type", teams.photo.contentType);
      return res.status(200).send(teams.photo.data);
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

export const updateTeamsController = async (req, res) => {
  try {
    const { teamname, stadium, shortname } = req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !teamname:
        return res.status(500).send({ error: "teamname is Required" });
      case !stadium:
        return res.status(500).send({ error: "stadium is Required" });
      case !shortname:
        return res.status(500).send({ error: "shortname is Required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const teams = await teamsModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(teamname) },
      { new: true }
    );
    if (photo) {
      teams.photo.data = fs.readFileSync(photo.path);
      teams.photo.contentType = photo.type;
    }
    await teams.save();
    res.status(201).send({
      success: true,
      message: "teams Created Successfully",
      teams,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updation of teams",
    });
  }
};

//delete
export const deleteTeamsController = async (req, res) => {
  try {
    await teamsModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Teams deleted success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in deleting teams",
    });
  }
};
