import { useRef, useState } from "react";
import gsap from "gsap";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import MagneticButton from "./MagneticButton";

const initialState = { name: "", email: "", subject: "", message: "", honeypot: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const successRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const API_URL = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
      requestAnimationFrame(() => {
        if (successRef.current) {
          gsap.fromTo(
            successRef.current,
            { opacity: 0, y: 12, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.6)" }
          );
        }
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const fields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "subject", label: "Subject", type: "text" },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6" noValidate>
      {/* Honeypot spam trap — hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="b_email_address_confirm"
        value={form.honeypot}
        onChange={handleChange("honeypot")}
        tabIndex={-1}
        autoComplete="new-password"
        style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0, pointerEvents: "none" }}
        aria-hidden="true"
        readOnly={false}
      />
      {fields.map((f) => (
        <div key={f.id} className="group relative">
          <input
            id={f.id}
            type={f.type}
            value={form[f.id]}
            onChange={handleChange(f.id)}
            placeholder=" "
            className="peer w-full rounded-xl border border-white/15 bg-panel/50 px-4 pb-2.5 pt-5 text-white outline-none transition-colors focus:border-electric focus:shadow-glowSm"
          />
          <label
            htmlFor={f.id}
            className="pointer-events-none absolute left-4 top-4 text-sm text-mist transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-electricGlow peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {f.label}
          </label>
          {errors[f.id] && <p className="mt-1 text-xs text-red-400">{errors[f.id]}</p>}
        </div>
      ))}

      <div className="group relative">
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          placeholder=" "
          className="peer w-full resize-none rounded-xl border border-white/15 bg-panel/50 px-4 pb-2.5 pt-5 text-white outline-none transition-colors focus:border-electric focus:shadow-glowSm"
        />
        <label
          htmlFor="message"
          className="pointer-events-none absolute left-4 top-4 text-sm text-mist transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-electricGlow peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
        >
          Message
        </label>
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <MagneticButton
        type="submit"
        disabled={status === "sending" || status === "success"}
        className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ${
          status === "success"
            ? "bg-green-500/80 cursor-not-allowed opacity-80 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            : "bg-electric hover:shadow-glow disabled:opacity-70"
        }`}
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle2 size={16} /> Message Sent!
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </MagneticButton>

      {status === "success" && (
        <p ref={successRef} className="flex items-center gap-2 text-sm font-medium text-electricGlow">
          <CheckCircle2 size={18} /> Message sent! I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
