import express from "express";
import { APP_PORT } from "./config";
import router from "./routes";
const app = express();

app.use(express.json());
app.use("/api", router);

const port = APP_PORT || 5500;
app.listen(port, console.log(`Server listening on port ${port}`));
