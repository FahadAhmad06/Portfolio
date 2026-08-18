import { Router } from "express";
import rateLimit from "express-rate-limit";
import { sendContactMessage } from "../controllers/contactController.js";

const router = Router();

// 5 submissions per 15 minutes per IP — basic spam protection.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages sent. Please try again later." },
});

router.post("/", contactLimiter, sendContactMessage);

export default router;
