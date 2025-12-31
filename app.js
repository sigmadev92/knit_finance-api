import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./src/middlewares/routes/index.js";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import swaggerOptions from "./src/docs/swagger/swaggerOptions.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());
app.use(express.json());

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", serve, setup(swaggerDocs));
app.use(router);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  console.log("req came");
  res.status(200).sendFile(path.join(__dirname, "src", "pages", "index.html"));
});

export default app;
