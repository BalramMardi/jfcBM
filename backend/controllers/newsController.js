import slugify from "slugify";
import fs from "fs";
import newsModel from "../models/newsModel.js";
import mongoose from "mongoose";

export const createNewsController = async (req, res) => {
  try {
    const { title, desc, date, popular, team, tile } = req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !title:
        return res.status(500).send({ error: "title is Required" });
      case !desc:
        return res.status(500).send({ error: "desc is Required" });
      case !date:
        return res.status(500).send({ error: "date is Required" });
      case !popular:
        return res.status(500).send({ error: "popular is Required" });
      case !team:
        return res.status(500).send({ error: "team is Required" });
      case !tile:
        return res.status(500).send({ error: "tile is Required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const news = new newsModel({ ...req.fields, slug: slugify(title) });
    if (photo) {
      news.photo.data = fs.readFileSync(photo.path);
      news.photo.contentType = photo.type;
    }

    await news.save();
    res.status(201).send({
      success: true,
      message: "news Created Successfully",
      news,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creation of news",
    });
  }
};

export const getNewsController = async (req, res) => {
  try {
    const news = await newsModel
      .find({})
      .select("-photo")
      .sort({ popular: -1 });
    res.status(200).send({
      success: true,
      message: "All news",
      total: news.length,
      news,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting of news",
    });
  }
};

export const getSingleNewsController = async (req, res) => {
  try {
    const news = await newsModel
      .findOne({ slug: req.params.slug })
      .select("-photo");

    res.status(200).send({
      success: true,
      message: "single news fetched Successfully",
      news,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting single news",
    });
  }
};
/* 
export const NewsPhotoController = async (req, res) => {
  try {
    const news = await newsModel.findById(req.params.pid).select("photo");
    if (news.photo.data) {
      res.set("Content-type", news.photo.contentType);
      return res.status(200).send(news.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in getting news",
      error,
    });
  }
};
 */

export const NewsPhotoController = async (req, res) => {
  try {
    const { pid } = req.params;
    if (!pid) {
      return res.status(400).send({ error: "Invalid PID" });
    }

    if (!mongoose.Types.ObjectId.isValid(pid)) {
      return res.status(400).send({ error: "Invalid ObjectId" });
    }

    const news = await newsModel.findById(pid).select("photo");
    if (news && news.photo && news.photo.data) {
      res.set("Content-type", news.photo.contentType);
      return res.status(200).send(news.photo.data);
    } else {
      return res.status(404).send({ error: "News not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in getting news",
    });
  }
};

/* export const NewsPhotoController = async (req, res) => {
  try {
    const { pid } = req.params;
    if (!pid) {
      return res.status(400).send({ error: "Invalid PID" });
    }

    const news = await newsModel.findById(pid).select("photo");
    if (news && news.photo && news.photo.data) {
      res.set("Content-type", news.photo.contentType);
      return res.status(200).send(news.photo.data);
    } else {
      return res.status(404).send({ error: "News not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in getting news",
    });
  }
}; */

//update

export const updateNewsController = async (req, res) => {
  try {
    const { title, desc, date, popular, team, tile } = req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !title:
        return res.status(500).send({ error: "title is Required" });
      case !desc:
        return res.status(500).send({ error: "desc is Required" });
      case !date:
        return res.status(500).send({ error: "date is Required" });
      case !popular:
        return res.status(500).send({ error: "popular is Required" });
      case !team:
        return res.status(500).send({ error: "team is Required" });
      case !tile:
        return res.status(500).send({ error: "tile is Required" });

      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const news = await newsModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(title) },
      { new: true }
    );
    if (photo) {
      news.photo.data = fs.readFileSync(photo.path);
      news.photo.contentType = photo.type;
    }
    await news.save();
    res.status(201).send({
      success: true,
      message: "league Updated Successfully",
      news,
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
export const deleteNewsController = async (req, res) => {
  try {
    await newsModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "news deleted success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error in deleting news",
    });
  }
};
