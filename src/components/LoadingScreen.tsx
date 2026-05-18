"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const DURATION = 2800;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);
      // ease-out cubic: fast start, decelerates near 100%
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 400);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ background: "#0d0d0d" }}
        >
          {/* Horizontal yellow grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent calc(11.11% - 2px),
                #ffcc00 calc(11.11% - 2px),
                #ffcc00 11.11%
              )`,
            }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p
              style={{
                fontFamily: "var(--font-headline)",
                color: "#ffcc00",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: "0.1em",
                textShadow: "4px 4px 0px rgba(0,0,0,0.8)",
              }}
            >
              LOADING...
            </p>

            <div
              style={{
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "0.85rem",
                border: "2px solid #ffffff",
                padding: "2px 14px",
                letterSpacing: "0.05em",
                minWidth: "56px",
                textAlign: "center",
              }}
            >
              {progress}%
            </div>

            {/* Progress bar */}
            <div
              style={{
                width: "min(320px, 80vw)",
                height: "30px",
                border: "4px solid #ffffff",
                borderRadius: "9999px",
                overflow: "hidden",
                background: "#1a1a1a",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "#ffcc00",
                  borderRadius: "9999px",
                  transition: "width 60ms linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
