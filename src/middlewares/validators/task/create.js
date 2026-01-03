import Joi from "joi";
import { CustomError } from "../../errorHandler.js";

const validateCreateTaskData = (req, res, next) => {
  if (!req.body) {
    return next(new CustomError(400, "Body Missing. Please send Data in JSON"));
  }
  const { title, description } = req.body;
  if (!title || !description) {
    return next(
      new CustomError(400, "Email and password are required. Found Missing")
    );
  }

  const schema = Joi.object({
    title: Joi.string().min(2).max(50).required().messages({
      "string.base": "Expected title as string",
      "string.empty": "Title cannot be empty",
      "string.min": "Title must be at least 2 characters",
      "string.max": "Title must be at most 50 characters",
      "any.required": "Title not found",
    }),

    description: Joi.string().min(10).max(500).required().messages({
      "string.base": "Description must be a string",
      "string.empty": "Description cannot be empty",
      "string.min": "Description must be at least 10 characters",
      "string.max": "Description must be at most 500 characters",
      "any.required": "Description not found",
    }),
  });

  const { error } = schema.validate({
    title,
    description,
  });

  if (error) {
    console.log("error in validating schema");
    return next(new CustomError(400, error.details[0].message));
  }
  next();
};

export default validateCreateTaskData;
