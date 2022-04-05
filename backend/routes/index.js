import express from "express";
import { otpController } from "../controllers";
const router = express.Router();

router.post("/send-otp", otpController.sendOtp);

export default router;
