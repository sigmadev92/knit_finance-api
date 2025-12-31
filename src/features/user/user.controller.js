import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  addUserRepo,
  findUserByEmailRepo,
  removeUserRepo,
} from "./user.repo.js";
import { CustomError } from "../../middlewares/errorHandler.js";
const regUser = async (req, res, next) => {
  //guarnteed the data is free from injection and is validated
  const { fullName, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const response = await addUserRepo({
      fullName,
      email,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({ response });
  } catch (error) {
    next(new CustomError(503, "Failed to add new user"));
  }
};
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserByEmailRepo(email);
  if (!user) {
    return next(new CustomError(403, "This Email was not found"));
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    return next(new CustomError(403, "Invalid Password"));
  }

  const token = jwt.sign({ _id: user._id, email });
  const cookieOptions = {
    httpOnly: true,
    sameSite: NODE_ENV === "production" ? "none" : "lax",
    secure: NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
  };
  res
    .status(200)
    .cookie("knit_token", token, cookieOptions)
    .json({ user, token });
};

const logoutUser = async (req, res, next) => {
  res
    .status(200)
    .cookie("knit_token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({ success: true, msg: "logout successful" });
};

const deleteUserAccount = async (req, res, next) => {
  try {
    await removeUserRepo(req.USER._id);
    res
      .status(200)
      .cookie("knit_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({ success: true, msg: "Account Deleted" });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

export { regUser, loginUser, logoutUser, deleteUserAccount };
