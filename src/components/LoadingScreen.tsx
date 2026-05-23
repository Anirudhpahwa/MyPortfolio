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
          style={{ background: "#F8F6F2" }}
        >
          {/* Horizontal purple grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent calc(11.11% - 6px),
                #A78BFA calc(11.11% - 6px),
                #A78BFA 11.11%
              )`,
            }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p
              style={{
                fontFamily: "var(--font-alfa-slab), serif",
                color: "#A78BFA",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "0.06em",
                textShadow: "4px 4px 0px rgba(0, 0, 0, 0.7)",
              }}
            >
              LOADING...
            </p>

            <div
              style={{
                color: "#111111",
                fontWeight: 900,
                fontSize: "0.85rem",
                border: "2px solid #A78BFA",
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
                border: "4px solid #111111",
                borderRadius: "9999px",
                overflow: "hidden",
                background: "#EDE9FE",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "#A78BFA",
                  borderRadius: "9999px",
                  transition: "width 60ms linear",
                  boxShadow: "2px 0px 8px rgba(167, 139, 250, 0.5)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
