import { JWT_SECRET } from "../config/env.js";
import { CustomError } from "./errorHandler.js";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.knit_token;

  if (!token) {
    return next(new CustomError(403, "Credentials Missing"));
  }

  const user = jwt.verify(token, JWT_SECRET);
  if (!user) {
    return next(new CustomError(403, "Invalid or Expired Token"));
  }
  req.USER = { ...user, iat: "", exp: "" };
  return next();
};

const preventExposed = (req, res, next) => {
  const token = req.cookies.blog_token;
  if (!token) {
    return next();
  }

  const user = jwt.verify(token, JWT_SECRET_KEY);
  if (!user) {
    return next();
  }

  next(new CustomError(400, "You are already logged in."));
};

const onlyAdmin = async (req, res, next) => {
  if (req.USER.role === "admin") return next();

  return next(new CustomError(403, "Only Admin can access the route"));
};

const onlyUser = async (req, res, next) => {
  if (req.USER.role === "user") return next();

  return next(new CustomError(403, "Only User can access the route"));
};

export { authMiddleware, preventExposed, onlyAdmin, onlyUser };
