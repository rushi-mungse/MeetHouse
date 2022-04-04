import express from "express";
import { APP_PORT } from "./config";
const app = express();

const port = APP_PORT || 5500;
app.listen(port, console.log(`Server listening on port ${port}`));
