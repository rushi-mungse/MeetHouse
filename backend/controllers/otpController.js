import Joi from "joi";
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

    res.json(req.body);
  }
}

export default new OtpController();
