import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Reveals children (usually <span> lines) line by line with a mask + upward slide.
 * Pass an array of strings as `lines`.
 */
export default function AnimatedText({ lines, className = "", delay = 0, tag: Tag = "h1" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const spans = containerRef.current.querySelectorAll(".line-inner");
    gsap.fromTo(
      spans,
      { yPercent: 110 },
      { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.12, delay }
    );
  }, [delay]);

  return (
    <Tag ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-mask block">
          <span className="line-inner block">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
