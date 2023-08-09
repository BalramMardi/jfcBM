import express from "express";
import {
  createPlayerController,
  getPlayerController,
  playerPhotoController,
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

//get-photo
router.get("/players-photo/:pid", playerPhotoController);

//DELETE

export default router;
