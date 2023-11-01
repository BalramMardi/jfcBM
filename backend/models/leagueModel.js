import mongoose from "mongoose";

const leagueSchema = new mongoose.Schema(
  {
    leaname: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    leashort: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("leagues", leagueSchema);
