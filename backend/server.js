import express from "express";
import { APP_PORT } from "./config";
import { handleErrors } from "./middlewares";
import router from "./routes";
import dbConnect from "./utils/database";
import cors from "cors";

const app = express();

const options = {
  origin: "http:localhost:3000",
};
app.use(cors(options));

app.use(express.json());
app.use("/api", router);
app.use(handleErrors);

dbConnect();

const port = APP_PORT || 5500;
app.listen(port, console.log(`Server listening on port ${port}`));
