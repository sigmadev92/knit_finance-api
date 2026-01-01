import { Router } from "express";
import userRouter from "../../features/user/user.routes.js";
import { authMiddleware, onlyAdmin, onlyUser } from "../auth.js";
import adminRouter from "../../features/user/admin.routes.js";
import taskRouter from "../../features/task/task.routes.js";
const apiRouter = Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/admin", authMiddleware, onlyAdmin, adminRouter);
apiRouter.use("/tasks", authMiddleware, taskRouter);
export default apiRouter;
