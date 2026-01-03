import Tasks from "./task.model.js";

const addTaskRepo = async ({ userId, title, description }) => {
  const newTask = await Tasks.insertOne({ userId, title, description });

  return newTask;
};
const getTaskById = async (userId, taskId) => {
  return await Tasks.findOne({ userId, _id: taskId });
};
const editTaskRepo = async (data, userId, taskId) => {
  const updatedTask = await Tasks.findOneAndUpdate(
    { _id: taskId, userId, status: "In Progress" },
    data,
    { new: true }
  );
  return updatedTask;
};

const changeStatusByUserRepo = async (status, taskId, userId) => {
  const task = await Tasks.findOne({ userId, _id: taskId });
  let canChange = false;
  if (task.status === "Not Started" && status === "In Progress") {
    canChange = true;
  } else if (task.status === "In Progress" && status === "Completed") {
    canChange = true;
  } else if (task.status === "Completed" && status === "Testing") {
    canChange = true;
  } else if (task.status === "Failed" && status === "In Progress") {
    canChange = true;
  }

  if (canChange) {
    task.status = status;
    await task.save();
    return {
      code: 200,
    };
  }
  return {
    code: 403,
  };
};

const removeTaskRepo = async (userId, taskId) => {
  const result = await Tasks.findOneAndDelete({
    userId,
    _id: taskId,
    status: { $ne: "Testing" },
  });
  console.log("At repo", result);
  return result;
};

const getTasksRepo = async (userId) => {
  return await Tasks.find({ userId });
};

export {
  addTaskRepo,
  getTaskById,
  editTaskRepo,
  removeTaskRepo,
  changeStatusByUserRepo,
  getTasksRepo,
};
