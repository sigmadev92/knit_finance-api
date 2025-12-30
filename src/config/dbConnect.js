import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";
const connectDBMongoose = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to database using mongoose");
  } catch (error) {
    console.log(error);
  }
};

export default connectDBMongoose;
