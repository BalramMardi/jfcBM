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
    away: {
      type: mongoose.ObjectId,
      ref: "teams",
      required: true,
    },
    date: {
      type: Date,
    },
    done: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("matches", matchSchema);
