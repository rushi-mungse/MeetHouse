import express from "express";
import { activateController, otpController } from "../controllers";
import { activateMiddleware } from "../middlewares";
const router = express.Router();

router.post("/send-otp", otpController.sendOtp);
router.post("/verify-otp", otpController.verifyOtp);
router.post("/activate", activateMiddleware, activateController.activate);
router.get("/refresh", activateMiddleware, activateController.refresh);

export default router;
