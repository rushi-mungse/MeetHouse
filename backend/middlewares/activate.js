import { JwtService } from "../services";

export default async function (req, res, next) {
  const { accessToken } = req.cookies;

  try {
    const userData = await JwtService.verifyJwt(accessToken);
    if (!userData) throw Error();
    req.userId = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalide token." });
  }
}
