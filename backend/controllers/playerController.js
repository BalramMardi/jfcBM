import slugify from "slugify";
import fs from "fs";
import PlayerModel from "../models/PlayerModel.js";

export const createPlayerController = async (req, res) => {
  try {
    const { name, number, position, appears, goals, assists, popular } =
      req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !number:
        return res.status(500).send({ error: "number is Required" });
      case !position:
        return res.status(500).send({ error: "position is Required" });
      case !appears:
        return res.status(500).send({ error: "appears is Required" });
      case !goals:
        return res.status(500).send({ error: "goals is Required" });
      case !assists:
        return res.status(500).send({ error: "assists is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const players = new PlayerModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      players.photo.data = fs.readFileSync(photo.path);
      players.photo.contentType = photo.type;
    }

    await players.save();
    res.status(201).send({
      success: true,
      message: "players Created Successfully",
      players,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creation of Players",
    });
  }
};

export const getPlayerController = async (req, res) => {
  try {
    const players = await PlayerModel.find({})
      .select("-photo")
      .sort({ popular: -1 });
    res.status(200).send({
      success: true,
      message: "All players",
      total: players.length,
      players,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting of Players",
    });
  }
};

export const getSinglePlayerController = async (req, res) => {
  try {
    const players = await PlayerModel.findOne({ slug: req.params.slug }).select(
      "-photo"
    );
    res.status(200).send({
      success: true,
      message: "single player get Successfully",
      players,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting single player",
      error: error.message,
    });
  }
};

export const playerPhotoController = async (req, res) => {
  try {
    const players = await PlayerModel.findById(req.params.pid).select("photo");
    if (players.photo.data) {
      res.set("Content-type", players.photo.contentType);
      return res.status(200).send(players.photo.data);
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

export const updatePlayerController = async (req, res) => {
  try {
    const { name, number, position, appears, goals, assists, popular } =
      req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !number:
        return res.status(500).send({ error: "number is Required" });
      case !position:
        return res.status(500).send({ error: "position is Required" });
      case !appears:
        return res.status(500).send({ error: "appears is Required" });
      case !goals:
        return res.status(500).send({ error: "goals is Required" });
      case !assists:
        return res.status(500).send({ error: "assists is Required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const players = await PlayerModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      players.photo.data = fs.readFileSync(photo.path);
      players.photo.contentType = photo.type;
    }
    await players.save();
    res.status(201).send({
      success: true,
      message: "players Updated Successfully",
      players,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updation of players",
    });
  }
};

//delete
export const deletePlayerController = async (req, res) => {
  try {
    await PlayerModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "players deleted success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in deleting players",
    });
  }
};
