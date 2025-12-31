import Joi from "joi";
import CustomError from "../../errorHandler.js";

const validateLoginData = (req, res, next) => {
  if (!req.body) {
    return next(new CustomError(400, "Body Missing. Please send Data in JSON"));
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new CustomError(400, "Email and password are required. Found Missing")
    );
  }

  const schema = Joi.object({
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

export default validateLoginData;
