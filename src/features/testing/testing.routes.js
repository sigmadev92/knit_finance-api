import { Router } from "express";
import { addNewTest } from "./testing.controller.js";
import { onlyUser } from "../../middlewares/auth.js";
const router = Router();

router.post("/:taskId", onlyUser, addNewTest);
export default router;
