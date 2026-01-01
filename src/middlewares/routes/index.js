import { Router } from "express";
import apiRouter from "./api.js";
import { notFound } from "../notFound.js";
import { errorHandler } from "../errorHandler.js";

const router = Router();

router.use("/api", apiRouter);

router.use(notFound);
router.use(errorHandler);

export default router;
