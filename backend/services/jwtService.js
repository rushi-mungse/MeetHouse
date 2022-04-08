import jwt from "jsonwebtoken";

class JwtService {
  static async signJwt(payload, secret = ACCESS_JWT_SECRET, expiry = "60s") {
    return await jwt.sign(payload, secret, { expiresIn: expiry });
  }

  static async verifyJwt(payload, secret = ACCESS_JWT_SECRET) {
    return await jwt.verify(payload, secret);
  }
}

export default JwtService;
