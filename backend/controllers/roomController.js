import Joi from "joi";
import RoomDto from "../dtos/roomDto";
import { Room } from "../models";

class RoomController {
  async createRoom(req, res, next) {
    const { topic, type } = req.body;
    const userId = req.userId;

    const roomSchema = Joi.object({
      topic: Joi.string().min(5).max(130).required(),
      type: Joi.string().required(),
    });

    const { error } = roomSchema.validate(req.body);
    if (error) return next(error);

    try {
      const room = await Room.create({
        topic,
        roomType: type,
        ownreId: userId,
        speakers: [userId],
      });
      return res.status(200).json(room);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
  async index(req, res, next) {
    try {
      const rooms = await Room.find({ roomType: { $in: ["open"] } })
        .populate("ownerId")
        .populate("speakers")
        .exec();
      const allRooms = rooms.map((room) => new RoomDto(room));
      return res.status(200).json(allRooms);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

export default new RoomController();
