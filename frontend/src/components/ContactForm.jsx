import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CheckCircle2, Loader2, Send, User, Mail, Tag, MessageSquare, AlertCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

const API_URL = import.meta.env.VITE_API_URL;

const initialState = { name: "", email: "", subject: "", message: "", honeypot: "" };

const FIELDS = [
  { id: "name", label: "Name", type: "text", icon: User },
  { id: "email", label: "Email", type: "email", icon: Mail },
  { id: "subject", label: "Subject", type: "text", icon: Tag },
];

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const successRef = useRef(null);
  const errorRef = useRef(null);

  /* ENTRANCE - fields fade/slide in with a stagger */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".form-field",
        { opacity: 0, y: 24, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
        }
      );
    }, formRef);
    return () => ctx.revert();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters";
    setErrors(e);

    if (Object.keys(e).length > 0) {
      gsap.fromTo(
        ".form-field-invalid",
        { x: -6 },
        { x: 0, duration: 0.5, ease: "elastic.out(1.2, 0.3)" }
      );
    }

    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
  };

  const handleFocus = (e) => {
    gsap.to(e.currentTarget.parentElement, {
      scale: 1.012,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleBlur = (e) => {
    gsap.to(e.currentTarget.parentElement, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
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
            { opacity: 0, y: 12, scale: 0.94 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.7)" }
          );
        }
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      requestAnimationFrame(() => {
        if (errorRef.current) {
          gsap.fromTo(
            errorRef.current,
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }
          );
          gsap.fromTo(
            formRef.current,
            { x: -6 },
            { x: 0, duration: 0.5, ease: "elastic.out(1.2, 0.3)" }
          );
        }
      });
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative w-full max-w-xl space-y-6"
      noValidate
    >
      {/* AMBIENT GLOW BEHIND THE FORM */}
      <div className="pointer-events-none absolute -inset-x-10 -top-10 -z-10 h-40 rounded-full bg-electric/[0.06] blur-[80px]" />

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

      {FIELDS.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.id}
            className={`form-field group relative ${errors[f.id] ? "form-field-invalid" : ""}`}
          >
            <Icon
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mist/50 transition-colors duration-300 peer-focus:text-electric group-focus-within:text-electric"
            />
            <input
              id={f.id}
              type={f.type}
              value={form[f.id]}
              onChange={handleChange(f.id)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=" "
              className={`peer w-full rounded-xl border bg-panel/50 py-4 pl-11 pr-4 text-white outline-none transition-all duration-300 focus:shadow-glowSm ${
                errors[f.id]
                  ? "border-red-400/50 focus:border-red-400"
                  : "border-white/15 focus:border-electric"
              }`}
            />
            <label
              htmlFor={f.id}
              className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 text-sm text-mist transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-electricGlow peer-focus:bg-obsidian peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-obsidian peer-[:not(:placeholder-shown)]:px-1.5"
            >
              {f.label}
            </label>

            {errors[f.id] && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                <AlertCircle size={12} /> {errors[f.id]}
              </p>
            )}
          </div>
        );
      })}

      <div className={`form-field group relative ${errors.message ? "form-field-invalid" : ""}`}>
        <MessageSquare
          size={16}
          className="pointer-events-none absolute left-4 top-5 text-mist/50 transition-colors duration-300 group-focus-within:text-electric"
        />
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=" "
          className={`peer w-full resize-none rounded-xl border bg-panel/50 py-4 pl-11 pr-4 text-white outline-none transition-all duration-300 focus:shadow-glowSm ${
            errors.message
              ? "border-red-400/50 focus:border-red-400"
              : "border-white/15 focus:border-electric"
          }`}
        />
        <label
          htmlFor="message"
          className="pointer-events-none absolute left-11 top-5 text-sm text-mist transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-xs peer-focus:text-electricGlow peer-focus:bg-obsidian peer-focus:px-1.5 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-obsidian peer-[:not(:placeholder-shown)]:px-1.5"
        >
          Message
        </label>
        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
            <AlertCircle size={12} /> {errors.message}
          </p>
        )}
      </div>

      <div className="form-field">
        <MagneticButton
          type="submit"
          disabled={status === "sending" || status === "success"}
          className={`inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 ${
            status === "success"
              ? "bg-green-500/80 cursor-not-allowed opacity-90 shadow-[0_0_25px_rgba(34,197,94,0.45)]"
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
              Send Message <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </MagneticButton>
      </div>

      {status === "success" && (
        <p
          ref={successRef}
          className="flex items-center gap-2 rounded-xl border border-electric/25 bg-electric/[0.06] px-4 py-3 text-sm font-medium text-electricGlow"
        >
          <CheckCircle2 size={18} /> Message sent! I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p
          ref={errorRef}
          className="flex items-center gap-2 rounded-xl border border-red-400/25 bg-red-400/[0.06] px-4 py-3 text-sm font-medium text-red-400"
        >
          <AlertCircle size={16} /> Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}