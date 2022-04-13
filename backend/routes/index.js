import express from "express";
import {
  activateController,
  logoutConroller,
  otpController,
  roomController,
} from "../controllers";
import { activateMiddleware } from "../middlewares";
const router = express.Router();

router.post("/send-otp", otpController.sendOtp);
router.post("/verify-otp", otpController.verifyOtp);
router.post("/activate", activateMiddleware, activateController.activate);
router.get("/refresh", activateController.refresh);
router.post("/logout", activateMiddleware, logoutConroller.logout);
router.post("/create-room", activateMiddleware, roomController.createRoom);
router.get("/get-rooms", roomController.index);

export default router;
