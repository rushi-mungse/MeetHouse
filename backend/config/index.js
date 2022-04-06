import dotenv from "dotenv";
dotenv.config();
export const { APP_PORT, DEBUG_MOD, HASH_SECRET } = process.env;
