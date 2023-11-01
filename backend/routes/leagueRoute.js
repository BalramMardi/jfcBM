import express from "express";

import formidable from "express-formidable";

import {
  createLeagueController,
  deleteLeagueController,
  getLeagueController,
  leaguePhotoController,
  updateLeagueController,
} from "../controllers/leagueController.js";

//router obj
const router = express.Router();

//routing----

//CREATE
router.post("/create-league", formidable(), createLeagueController);

//get
router.get("/get-league", getLeagueController);

//get-photo
router.get("/league-photo/:pid", leaguePhotoController);

//update
router.put("/update-league/:pid", formidable(), updateLeagueController);

//DELETE
router.delete("/delete-league/:pid", deleteLeagueController);

export default router;
