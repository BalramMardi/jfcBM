import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema(
  {
    teamname: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    stadium: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shortname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("teams", teamsSchema);
