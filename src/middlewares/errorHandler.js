import { MongooseError } from "mongoose";

export class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomError) {
    console.log("Custom Error");
    return res.status(err.code).json({ success: false, message: err.message });
  }
  console.log("Server Error");

  if (err instanceof MongooseError) {
    return res.status(409).json({ message: err.message });
  }

  res.status(500).json({ message: "Server problem" });
};
