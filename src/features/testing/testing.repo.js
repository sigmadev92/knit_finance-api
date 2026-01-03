import Tests from "./testing.model.js";
import Tasks from "../task/task.model.js";
import UserModel from "../user/user.model.js";

const addNewTestRepo = async ({ userId, taskId }) => {
  //step-0
  //check if the Task exists and owned by user.
  //  0.1) Check if the task exists

  const task = await Tasks.findById(taskId);
  if (!task) {
    return {
      code: 404,
      data: {
        message: "This Task doesn't exist",
      },
    };
  }
  //0.2) check if task belongs to user
  if (task.userId.toString() !== userId) {
    return {
      code: 403,
      data: {
        message: "Task-Owner Mismatch",
      },
    };
  }

  //0.3 Check if the task is completed or not
  if (task.status !== "Completed") {
    return {
      code: 400,
      data: {
        message: "Only allowed Completed Tasks",
      },
    };
  }

  const user = await UserModel.findById(userId);
  if (user.tasksSentForTest === 5) {
    return {
      code: 400,
      data: {
        message: "Already 5 Tasks in Testing",
      },
    };
  }

  //step-1 create a test
  const newTest = await Tests.insertOne({ userId, taskId });
  user.tasksSentForTest = user.tasksSentForTest + 1;
  task.status = "Testing";
  task.attempts = task.attempts + 1;
  await user.save();
  await task.save();
  const admin = await UserModel.findOne({
    role: "admin",
    onVacation: false,
  }).sort({
    taskAssigned: 1,
  });

  if (!admin || admin.tasksAssigned === 5) {
    // no admin was idle.

    return {
      code: 201,
      data: {
        message: "Task Queued in Testing",
        newTest,
      },
    };
  }
  newTest.adminId = admin._id;
  newTest.status = "Assigned";
  admin.tasksAssigned = admin.tasksAssigned + 1;

  await admin.save();
  await user.save();
  await newTest.save();
  return {
    code: 201,
    data: {
      message: "Task Assigned for Testing",
      newTest,
    },
  };
};

export { addNewTestRepo };
