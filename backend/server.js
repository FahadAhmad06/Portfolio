import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: process.env.NODE_ENV === "production" ? "*" : FRONTEND_ORIGIN }));
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/contact", contactRoute);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
    console.log(`Accepting requests from ${FRONTEND_ORIGIN}`);
  });
}

export default app;
