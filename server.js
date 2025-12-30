import http from "http";
import app from "./app.js";
import { PORT } from "./src/config/env.js";
import connectDBMongoose from "./src/config/dbConnect.js";
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`SERVER LISTENING ON http://localhost:${PORT}`);
  connectDBMongoose();
});
