import mongoose from "mongoose";
const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    topic: { type: String, required: true },
    roomType: { type: String, required: false },
    owenerId: { type: Schema.Types.ObjectId, ref: "User" },
    speakers: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      required: false,
    },
    like: { type: Number, default: 0, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
