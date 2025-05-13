import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Certificate from "../models/Certificate.js";
import { fileURLToPath } from "url";

const router = express.Router();

// Setup for ES Module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer config
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
const upload = multer({ storage });

// Upload certificate
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { certificateId } = req.body;
    const filePath = req.file?.path;

    if (!certificateId || !filePath) {
      return res.status(400).json({ error: "Missing certificateId or file" });
    }

    const cert = new Certificate({ certificateId, filePath });
    await cert.save();

    res.json({ message: "Certificate uploaded", id: certificateId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to upload certificate" });
  }
});

// Get certificate by ID
router.get("/:id", async (req, res) => {
  try {
    const cert = await Certificate.findOne({ certificateId: req.params.id });
    if (!cert) return res.status(404).send("Certificate not found");

    const absolutePath = path.resolve(cert.filePath);

    // Check if file exists before sending
    if (!fs.existsSync(absolutePath)) {
      return res.status(404).send("Certificate file not found on server");
    }

    res.sendFile(absolutePath);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
