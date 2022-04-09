import express from "express";
import { APP_PORT } from "./config";
import { handleErrors } from "./middlewares";
import router from "./routes";
import dbConnect from "./utils/database";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
const options = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(options));

app.use(express.json({ limit: "5mb" }));
app.use("/api", router);
app.use(handleErrors);
app.use("/uploads", express.static("uploads"));
dbConnect();

const port = APP_PORT || 5500;
app.listen(port, console.log(`Server listening on port ${port}`));
