import express from "express";

import formidable from "express-formidable";
import {
  createTeamsController,
  deleteTeamsController,
  getSingleTeamController,
  getTeamsController,
  teamsPhotoController,
  updateTeamsController,
} from "../controllers/teamsController.js";
//router obj
const router = express.Router();

//routing----

//CREATE
router.post("/create-teams", formidable(), createTeamsController);

//get
router.get("/get-teams", getTeamsController);

router.get("/get-teams/:slug", getSingleTeamController);

//get-photo
router.get("/teams-photo/:pid", teamsPhotoController);

//update
router.put("/update-teams/:pid", formidable(), updateTeamsController);

//DELETE
router.delete("/delete-teams/:pid", deleteTeamsController);

export default router;
