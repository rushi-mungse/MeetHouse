import dotenv from "dotenv";
dotenv.config();
export const {
  APP_PORT,
  DEBUG_MOD,
  HASH_SECRET,
  ACCESS_TOKEN_SECRET,
  REFRESH_JWT_TOKEN,
  DB_URL,
} = process.env;
