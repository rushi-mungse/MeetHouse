import { RefreshToken } from "../models";

class LogoutConroller {
  async logout(req, res, next) {
    const { refreshToken } = req.cookies;
    const userId = req.userId;
    try {
      await RefreshToken.deleteOne({ userId, refreshToken });
      res.clearCookie("refreshToken");
      res.clearCookie("accessToken");
      res.json({ user: null, auth: false });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

export default new LogoutConroller();
