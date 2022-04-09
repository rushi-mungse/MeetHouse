import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config";

class JwtService {
  static async signJwt(payload, secret = ACCESS_TOKEN_SECRET, expiry = "1h") {
    return await jwt.sign(payload, secret, { expiresIn: expiry });
  }

  static async verifyJwt(payload, secret = ACCESS_TOKEN_SECRET) {
    return await jwt.verify(payload, secret);
  }
}

export default JwtService;
