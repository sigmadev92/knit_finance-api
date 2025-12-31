import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: [true, "user email is required"],
    unique: [true, "email already registered"],
    validate: [validator.isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
