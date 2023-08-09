import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("CONNECTED TO MONGODB".bgGreen.white);
  } catch (error) {
    console.log(`ERROR IN MONGODB ${error}`.bgRed.white);
  }
};

export default connectDB;
