import { Router } from "express";
import { addNewTask, deleteTask, updateTask } from "./task.controllr.js";
import { onlyAdmin, onlyUser } from "../../middlewares/auth.js";
const router = Router();

router.post("/", onlyUser, addNewTask);
router.put("/:taskId", onlyUser, updateTask);
router.put("/status/user/:taskId", onlyUser);
router.put("/status/admin/:taskId", onlyAdmin);
router.delete("/:taskId", deleteTask);
export default router;
