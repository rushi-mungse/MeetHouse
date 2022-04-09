import Joi from "joi";
import jimp from "jimp";
import path from "path";
import { User } from "../models";
import { HandleCustomError } from "../services";

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
}

export default new ActivateController();
