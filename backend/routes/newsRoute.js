import express from "express";
import formidable from "express-formidable";
import {
  NewsPhotoController,
  createNewsController,
  deleteNewsController,
  getNewsController,
  getSingleNewsController,
  updateNewsController,
} from "../controllers/newsController.js";

const router = express.Router();

//routing----

//CREATE
router.post("/create-news", formidable(), createNewsController);

//UPDATE

//GET
//get-news
router.get("/get-news", getNewsController);

//get-photo
router.get("/news-photo/:pid", NewsPhotoController);

//get-single-news
router.get("/get-news/:slug", getSingleNewsController);

//update
router.put("/update-news/:pid", formidable(), updateNewsController);

//DELETE
router.delete("/delete-news/:pid", deleteNewsController);

export default router;
