import express from "express";
import {
  createPlayerController,
  deletePlayerController,
  getPlayerController,
  getSinglePlayerController,
  playerPhotoController,
  updatePlayerController,
} from "../controllers/playerController.js";
import formidable from "express-formidable";
//router obj
const router = express.Router();

//routing----

//CREATE
router.post("/create-players", formidable(), createPlayerController);

//UPDATE

//GET
//get-product
router.get("/get-players", getPlayerController);

router.get("/get-players/:slug", getSinglePlayerController);

//get-photo
router.get("/players-photo/:pid", playerPhotoController);

//update
router.put("/update-players/:pid", formidable(), updatePlayerController);

//DELETE
router.delete("/delete-players/:pid", deletePlayerController);

export default router;
