import Joi from "joi";
import { REFRESH_JWT_TOKEN } from "../config";
import { RefreshToken, User } from "../models";
import { hashService, JwtService, OtpService } from "../services";
import { HandleCustomError } from "../services";
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
      const finalHashedOpt = `${hashOtp}.${expiry}`;
      return res
        .status(200)
        .json({ phone: userPhoneNumber, otp, hashedOtp: finalHashedOpt });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  async verifyOtp(req, res, next) {
    const { phone, hash, otp } = req.body;

    const otpSchema = Joi.object({
      otp: Joi.string().length(4).required(),
      phone: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
      hash: Joi.string().required(),
    });

    const { error } = otpSchema.validate(req.body);
    if (error) return next(error);

    const hashedOtp = hash.split(".")[0];
    const expiry = hash.split(".")[1];

    if (Date.now() > +expiry) {
      return next(
        HandleCustomError.handlingCustomError(500, "Otp has expired.")
      );
    }
    const data = `${phone}.${otp}.${expiry}`;
    try {
      const valid = await hashService.verifyHash(data, hashedOtp);
      if (!valid) {
        return next(
          HandleCustomError.handlingCustomError(401, "You entered wrong otp")
        );
      }
      let user;
      user = await User.findOne({ phone }).select("-createdAt -updatedAt -__v");
      if (!user) {
        user = await User.create({ phone }).select(
          "-createdAt -updatedAt -__v"
        );
      }
      const accessToken = await JwtService.signJwt({ _id: user._id });
      const refreshToken = await JwtService.signJwt(
        { _id: user._id },
        REFRESH_JWT_TOKEN,
        "1y"
      );

      await RefreshToken.create({
        refreshToken,
      });

      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 24 * 30,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 1000 * 60 * 24 * 30,
        httpOnly: true,
      });

      return res.json({ accessToken, refreshToken, user });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

export default new OtpController();
