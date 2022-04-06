import express from "express";
import { APP_PORT } from "./config";
import { handleErrors } from "./middlewares";
import router from "./routes";
const app = express();

app.use(express.json());
app.use("/api", router);
app.use(handleErrors);

const port = APP_PORT || 5500;
app.listen(port, console.log(`Server listening on port ${port}`));
