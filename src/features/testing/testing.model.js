import mongoose from "mongoose";

const testingSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      unique: true,
    },
    status: {
      type: String,
      enum: ["Assigned", "Queued"],
      default: "Queued",
    },
  },
  { timestamps: true }
);

const Tests = mongoose.model("Test", testingSchema);

export default Tests;
