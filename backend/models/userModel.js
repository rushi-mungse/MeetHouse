import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
