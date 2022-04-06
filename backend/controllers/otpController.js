import Joi from "joi";
import { hashService, OtpService } from "../services";
class OtpController {
  async sendOtp(req, res, next) {
    const { userPhoneNumber } = req.body;

    const phoneSchema = Joi.object({
      userPhoneNumber: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
    });

    const { error } = phoneSchema.validate(req.body);
    if (error) return next(error);

    const otp = OtpService.generateOtp();
    const ttl = 1000 * 60 * 2;
    const expiry = Date.now() + ttl;
    const data = `${userPhoneNumber}.${otp}.${expiry}`;

    try {
      const hashOtp = await hashService.hashOtp(data);
      return res.status(200).json({ phone: userPhoneNumber, otp, hashOtp });
    } catch (error) {
      console.log(error);
      res.json({ msg: "error" });
    }
  }
}

export default new OtpController();
