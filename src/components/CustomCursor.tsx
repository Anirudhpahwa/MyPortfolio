"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (ref.current) {
        ref.current.style.left = e.clientX - 20 + "px";
        ref.current.style.top = e.clientY - 20 + "px";
      }
    }
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="custom-cursor hidden md:block" />;
}
