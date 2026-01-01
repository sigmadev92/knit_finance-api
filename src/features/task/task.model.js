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
      default: ["Not Started"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Task", taskSchema);

export default Tasks;
