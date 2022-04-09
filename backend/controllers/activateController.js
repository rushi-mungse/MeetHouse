import Joi from "joi";
import jimp from "jimp";
import path from "path";
import { RefreshToken, User } from "../models";
import { HandleCustomError, JwtService } from "../services";
import { REFRESH_JWT_TOKEN } from "../config";

class ActivateController {
  async activate(req, res, next) {
    const { avatar, username, name } = req.body;

    const activateSchema = Joi.object({
      avatar: Joi.string().required(),
      username: Joi.string().required(),
      name: Joi.string().required(),
    });

    const { error } = activateSchema.validate(req.body);
    if (error) return next(error);

    const buffer = Buffer.from(
      avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
      "base64"
    );

    const imgPath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

    try {
      const jimpRes = await jimp.read(buffer);
      jimpRes
        .resize(150, jimp.AUTO)
        .write(path.resolve(__dirname, `../uploads/${imgPath}`));
    } catch (error) {
      console.log(error);
      return next(error);
    }
    const userId = req.userId;

    try {
      const user = await User.findOne({ _id: userId }).select(
        "-createdAt -updatedAt -__v"
      );
      if (!user) {
        return next(
          HandleCustomError.handlingCustomError(500, "User not found")
        );
      }
      user.activated = true;
      user.avatar = `/uploads/${imgPath}`;
      user.name = name;
      user.username = username;
      user.save();
      return res.json({ user, auth: true });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  async refresh(req, res, next) {
    const { refreshToken } = req.cookies;
    let userId;

    try {
      const userData = await JwtService.verifyJwt(
        refreshToken,
        REFRESH_JWT_TOKEN
      );
      if (!userData)
        return next(
          HandleCustomError.handlingCustomError(422, "Invalide token.")
        );
      userId = userData._id;
    } catch (error) {
      console.log(error);
      return next(error);
    }

    try {
      const token = await RefreshToken.findOne({ userId, refreshToken });
      if (!token) return res.status(500).json({ message: "Invalide token." });

      const user = await User.findOne({ _id: userId });
      if (!user)
        return next(
          HandleCustomError.handlingCustomError(400, "User not found.")
        );

      const access_token = await JwtService.signJwt({ _id: userId });
      const refresh_token = await JwtService.signJwt(
        { _id: userId },
        REFRESH_JWT_TOKEN,
        "1y"
      );

      await RefreshToken.updateOne({ userId }, { refreshToken: refresh_token });

      res.cookie("accessToken", access_token, {
        maxAge: 1000 * 60 * 24 * 30,
        httpOnly: true,
      });

      res.cookie("refreshToken", refresh_token, {
        maxAge: 1000 * 60 * 24 * 30,
        httpOnly: true,
      });

      return res.json({ user, auth: true });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

export default new ActivateController();
