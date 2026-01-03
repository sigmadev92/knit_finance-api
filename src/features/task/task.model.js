import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 2,
      maxlength: 50,
      required: true,
    },
    description: {
      type: String,
      minlength: 10,
      maxlength: 500,
      required: true,
    },
    attempts: {
      type: Number,
      default: 0,
      max: 5,
    },
    status: {
      type: String,
      enum: [
        "Not Started",
        "In Progress",
        "Completed",
        "Testing",
        "Failed",
        "Approved",
      ],
      default: "Not Started",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Task", taskSchema);

export default Tasks;
