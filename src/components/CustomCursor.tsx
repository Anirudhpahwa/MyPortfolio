"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, select, textarea, label, summary';

export default function CustomCursor() {
  const circleRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (circleRef.current) {
        circleRef.current.style.left = e.clientX - 20 + "px";
        circleRef.current.style.top = e.clientY - 20 + "px";
      }
      if (pointerRef.current) {
        pointerRef.current.style.left = e.clientX + "px";
        pointerRef.current.style.top = e.clientY + "px";
      }
    }

    function onOver(e: MouseEvent) {
      const isInteractive = !!(e.target as Element)?.closest(
        INTERACTIVE_SELECTOR
      );
      if (circleRef.current) {
        circleRef.current.style.opacity = isInteractive ? "0" : "1";
        circleRef.current.style.transform = isInteractive
          ? "scale(0.4)"
          : "scale(1)";
      }
      if (pointerRef.current) {
        pointerRef.current.style.opacity = isInteractive ? "1" : "0";
        pointerRef.current.style.transform = isInteractive
          ? "scale(1)"
          : "scale(0.6)";
      }
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="hidden md:block" style={{ pointerEvents: "none" }}>
      {/* Default circle cursor */}
      <div
        ref={circleRef}
        className="custom-cursor"
        style={{
          transition: "opacity 0.15s ease, transform 0.15s ease",
        }}
      />

      {/* Purple pointer cursor for interactive elements */}
      <div
        ref={pointerRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transform: "scale(0.6)",
          transition: "opacity 0.15s ease, transform 0.15s ease",
          filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.35))",
        }}
      >
        <svg
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L0 21L5.5 15.5L8.5 23.5L12.5 22L9.5 14L16 14L0 0Z"
            fill="#A78BFA"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
