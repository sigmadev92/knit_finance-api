import { addNewTestRepo } from "./testing.repo.js";

const addNewTest = async (req, res, next) => {
  const { taskId } = req.params;
  const userId = req.USER._id;

  const response = await addNewTestRepo({ userId, taskId });

  return res.status(response.code).json(response.data);
};

export { addNewTest };
