import express from "express";
import { APP_PORT } from "./config";
import { handleErrors } from "./middlewares";
import router from "./routes";
import dbConnect from "./utils/database";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";

const port = APP_PORT || 5050;
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

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

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("hello", (data) => {
    console.log(data);
  });
});

server.listen(port, console.log(`Server listening on port ${port}`));
