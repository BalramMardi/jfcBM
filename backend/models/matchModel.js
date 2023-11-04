import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
  {
    league: {
      type: mongoose.ObjectId,
      ref: "leagues",
      required: true,
    },
    matchday: {
      type: Number,
      required: true,
    },
    home: {
      type: mongoose.ObjectId,
      ref: "teams",
      required: true,
    },
    homescore: {
      type: Number,
      required: false,
      default: -1,
    },
    away: {
      type: mongoose.ObjectId,
      ref: "teams",
      required: true,
    },
    awayscore: {
      type: Number,
      required: false,
      default: -1,
    },
    date: {
      type: Date,
    },
    time: {
      type: String,
      default: "8:00",
    },
    neutral: {
      type: Boolean,
      default: false,
    },
    done: {
      type: Boolean,
      default: false,
    },
    stadium: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("matches", matchSchema);
