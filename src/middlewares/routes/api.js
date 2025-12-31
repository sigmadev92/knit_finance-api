import { Router } from "express";
import userRouter from "../../features/user/user.routes.js";
import { authMiddleware, onlyAdmin } from "../auth.js";
import adminRouter from "../../features/user/admin.routes.js";
const apiRouter = Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/admin", authMiddleware, onlyAdmin, adminRouter);
export default apiRouter;
