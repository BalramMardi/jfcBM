import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },

    appears: {
      type: Number,
      required: true,
    },
    goals: {
      type: Number,
      required: true,
    },
    assists: {
      type: Number,
      required: true,
    },
    popular: {
      type: Number,
      required: true,
      default: 5,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("players", playerSchema);
