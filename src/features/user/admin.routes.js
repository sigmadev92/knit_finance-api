import { Router } from "express";
import { setUserAsAdmin } from "./user.controller.js";

const adminRouter = Router();
adminRouter.put("/set-role/admin", setUserAsAdmin);
export default adminRouter;
