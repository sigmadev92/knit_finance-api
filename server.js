import http from "http";
import app from "./app.js";
import { PORT } from "./src/config/env.js";
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`SERVER LISTENING ON http://localhost:${PORT}`);
});
