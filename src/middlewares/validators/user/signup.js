import Joi from "joi";
import CustomError from "../../errorHandler.js";

const validateRegData = (req, res, next) => {
  if (!req.body) {
    return next(new CustomError(400, "Body Missing. Please send Data in JSON"));
  }
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    console.log("here 1");
    return next(
      new CustomError(
        400,
        "Fullname, Email and password are required. Found Missing"
      )
    );
  }

  const schema = Joi.object({
    fullName: Joi.string().min(2).max(30).required(),

    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),

    password: Joi.string()
      .pattern(/^[A-Za-z0-9@#]{8,12}$/)
      .message(
        "Password must be 8-12 characters long and can only contain letters, numbers, @, and #."
      )
      .required(),
  });

  const { error } = schema.validate({
    fullName,
    email,
    password,
  });

  if (error) {
    console.log("error in validating schema");
    return next(new CustomError(400, error.details[0].message));
  }
  next();
};

export default validateRegData;
