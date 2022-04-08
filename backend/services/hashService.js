import crypto from "crypto";
import { HASH_SECRET } from "../config";

const hashService = {
  async hashOtp(data) {
    return await crypto.Hmac("sha256", HASH_SECRET).update(data).digest("hex");
  },

  async verifyHash(data, hashedOtp) {
    const comparedHashedOtp = await this.hashOtp(data);
    return comparedHashedOtp === hashedOtp;
  },
};

export default hashService;
