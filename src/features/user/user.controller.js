import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  addUserRepo,
  findUserByEmailRepo,
  findUserByIdRepo,
  removeUserRepo,
  updateUserRoleRepo,
} from "./user.repo.js";
import { CustomError } from "../../middlewares/errorHandler.js";
import { JWT_SECRET, NODE_ENV } from "../../config/env.js";
const regUser = async (req, res, next) => {
  //guarnteed the data is free from injection and is validated
  const { fullName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const response = await addUserRepo({
      fullName,
      email,
      password: hashedPassword,
      role: "user",
    });
    return res.status(201).json({ response });
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserByEmailRepo(email);
  if (!user) {
    return next(new CustomError(401, "This Email was not found"));
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    return next(new CustomError(401, "Invalid Password"));
  }

  const token = jwt.sign({ _id: user._id, email, role: user.role }, JWT_SECRET);
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

const getAuth = async (req, res, next) => {
  const userId = req.USER._id;

  const user = await findUserByIdRepo(userId);

  return res.status(200).json({ user });
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
const setUserAsAdmin = async (req, res, next) => {
  const { email } = req.body;
  try {
    await updateUserRoleRepo(email, "admin");
    return res.status(200).json({ sucess: true });
  } catch (error) {
    next(new CustomError(403, error.message));
  }
};

export {
  regUser,
  loginUser,
  logoutUser,
  deleteUserAccount,
  setUserAsAdmin,
  getAuth,
};
