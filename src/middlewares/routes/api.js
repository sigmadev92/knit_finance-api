import { Router } from "express";
import userRouter from "../../features/user/user.routes.js";
const apiRouter = Router();

apiRouter.use("/users", userRouter);
export default apiRouter;
