import express from "express";
import {
  createMatchController,
  deleteMatchController,
  getMatchController,
  singleMatchController,
  updateMatchController,
} from "../controllers/matchController.js";

const router = express.Router();

//routing----

//CREATE
router.post("/create-match", createMatchController);

//get-news
router.get("/get-match", getMatchController);

//get-single-news
router.get("/get-match/:slug", singleMatchController);

//update
router.put("/update-match/:id", updateMatchController);

//DELETE
router.delete("/delete-match/:id", deleteMatchController);

export default router;
