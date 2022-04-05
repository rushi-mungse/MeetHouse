class OtpController {
  async sendOtp(req, res, next) {
    const { userPhoneNumber } = req.body;

    res.json(req.body);
  }
}

export default new OtpController();
