import { Router } from "express";
import {
  deleteUserAccount,
  loginUser,
  logoutUser,
  regUser,
} from "./user.controller.js";

const router = Router();

router.post("/register", regUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.delete("/", deleteUserAccount);

export default router;
