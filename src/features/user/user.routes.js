import { Router } from "express";
import {
  deleteUserAccount,
  getAuth,
  loginUser,
  logoutUser,
  regUser,
} from "./user.controller.js";
import { authMiddleware, preventExposed } from "../../middlewares/auth.js";

const router = Router();

router.post("/register", preventExposed, regUser);
router.post("/login", preventExposed, loginUser);
router.get("/auth", authMiddleware, getAuth);
router.get("/logout", authMiddleware, logoutUser);
router.delete("/", authMiddleware, deleteUserAccount);

export default router;
