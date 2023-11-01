import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: String,
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
    team: {
      type: String,
      required: true,
      default: "First",
    },
    tile: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("news", newsSchema);
