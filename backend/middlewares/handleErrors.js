import { DEBUG_MOD } from "../config";
import { ValidationError } from "joi";

const handleErrors = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error",
    ...(DEBUG_MOD == "true" && { originalError: err.message }),
  };

  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      message: err.message,
    };
  }
  res.status(statusCode).json(data);
};

export default handleErrors;
