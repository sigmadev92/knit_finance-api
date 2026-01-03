import {
  addTaskRepo,
  changeStatusByUserRepo,
  editTaskRepo,
  getTasksRepo,
  removeTaskRepo,
} from "./task.repo.js";
import { CustomError } from "../../middlewares/errorHandler.js";
const addNewTask = async (req, res, next) => {
  const { title, description } = req.body;
  const userId = req.USER._id;

  try {
    const newTask = await addTaskRepo({ userId, title, description });
    return res.status(201).json({ newTask, success: true });
  } catch (error) {
    throw new CustomError(500, error.message);
  }
};

const updateTask = async (req, res, next) => {
  const newFields = req.body;
  const userId = req.USER._id;
  const taskId = req.params.taskId;

  try {
    const updatedTask = await editTaskRepo(newFields, userId, taskId);
    if (!updatedTask) {
      return next(new CustomError(403, "Invalid Details"));
    }
    return res.status(200).json({ success: true, updatedTask });
  } catch (error) {
    throw new CustomError(500, error.message);
  }
};

const changeStatusByUser = async (req, res, next) => {
  const { status } = req.body;
  if (
    typeof status !== "string" ||
    !["In Progress", "Completed"].includes(status)
  ) {
    return next(new CustomError(403, "Invalid Status"));
  }

  const { taskId } = req.params;
  console.log(taskId);
  const userId = req.USER._id;

  const response = await changeStatusByUserRepo(status, taskId, userId);
  if (response.code === 200) {
    return res.status(200).json({ success: true });
  }

  return next(new CustomError(403, "Cannot change status"));
};

const deleteTask = async (req, res, next) => {
  const userId = req.USER._id;
  const taskId = req.params.taskId;
  const result = await removeTaskRepo(userId, taskId);
  if (!result) {
    return next(new CustomError(403, "Invalid details"));
  }
  return res.status(200).json({ success: true, deletedTask: result });
};

const findTasks = async (req, res, next) => {};

const getMyTasks = async (req, res, next) => {
  const myTasks = await getTasksRepo(req.USER._id);
  return res.status(200).json({ tasks: myTasks });
};

export { addNewTask, updateTask, deleteTask, changeStatusByUser, getMyTasks };
