import dotenv from "dotenv";
dotenv.config();
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const CLIENT_URL = process.env.CLIENT_URL;
export { NODE_ENV, PORT, MONGO_URI, JWT_SECRET, CLIENT_URL };
