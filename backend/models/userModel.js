import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    phone: { type: String, required: true },
    activated: { type: Boolean, default: false },
    name: { type: String, required: false },
    username: { type: String, required: false },
    avatar: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
