import express from "express";
import Contact from "../models/ContactForm.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit form" });
  }
});

export default router;
