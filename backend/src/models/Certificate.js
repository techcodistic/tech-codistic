import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  certificateId: { type: String, required: true, unique: true },
  filePath: { type: String, required: true }
});

export default mongoose.model("Certificate", certificateSchema);
