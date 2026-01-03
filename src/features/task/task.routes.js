import { Router } from "express";
import {
  addNewTask,
  changeStatusByUser,
  deleteTask,
  getMyTasks,
  updateTask,
} from "./task.controllr.js";
import { onlyUser } from "../../middlewares/auth.js";
import validateCreateTaskData from "../../middlewares/validators/task/create.js";
const router = Router();

router.use(onlyUser);
router.post("/", validateCreateTaskData, addNewTask);
router.get("/", getMyTasks);
router.put("/:taskId", updateTask);
router.put("/status/user/:taskId", changeStatusByUser);
router.delete("/:taskId", deleteTask);
export default router;
