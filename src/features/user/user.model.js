import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema(
  {
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
    tasksAssigned: {
      type: Number,
      required: function () {
        return this.role === "admin";
      },
      default: 0,
      max: 5,
    },
    tasksSentForTest: {
      type: Number,
      required: function () {
        return this.role === "user";
      },
      default: 0,
      max: 5,
    },
    onVacation: {
      type: Boolean,
      required: function () {
        return this.role === "admin";
      },
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.role === "user") {
    this.tasksAssigned = undefined;
    this.onVacation = undefined;
  }

  if (this.role === "admin") {
    this.tasksSentForTest = undefined;
  }
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
