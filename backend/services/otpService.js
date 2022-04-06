import crypto from "crypto";

class OtpService {
  generateOtp() {
    return crypto.randomInt(1000, 9999);
  }
}

export default new OtpService();
