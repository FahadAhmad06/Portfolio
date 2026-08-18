import { getSheet, escapeHtml } from "../config/sheets.js";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function sendContactMessage(req, res) {
  console.log("📩 Contact form request received:", req.body);
  const { name, email, subject, message, honeypot } = req.body || {};

  // Honeypot spam trap: real visitors never fill this hidden field.
  if (honeypot) {
    console.log("🚫 Honeypot triggered, ignoring.");
    return res.status(200).json({ ok: true });
  }

  if (!name || !name.trim()) {
    console.log("❌ Validation failed: Name missing");
    return res.status(400).json({ error: "Name is required." });
  }
  if (!email || !isValidEmail(email)) {
    console.log("❌ Validation failed: Email invalid");
    return res.status(400).json({ error: "A valid email is required." });
  }
  if (!subject || !subject.trim()) {
    console.log("❌ Validation failed: Subject missing");
    return res.status(400).json({ error: "Subject is required." });
  }
  if (!message || message.trim().length < 10) {
    console.log("❌ Validation failed: Message too short");
    return res.status(400).json({ error: "Message must be at least 10 characters." });
  }

  try {
    console.log("🔗 Connecting to Google Sheets...");
    const doc = await getSheet();
    const sheet = doc.sheetsByIndex[0];
    console.log("✅ Connected! Adding row to sheet:", sheet.title);

    // Append values in column order: Date | Name | Email | Subject | Message
    await sheet.addRow([
      new Date().toLocaleString(),
      escapeHtml(name),
      escapeHtml(email),
      escapeHtml(subject),
      escapeHtml(message),
    ]);

    console.log("✅ Row added successfully!");
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ Google Sheets save failed:", err.message);
    return res.status(500).json({ error: "Failed to send message. Please try again." });
  }
}
