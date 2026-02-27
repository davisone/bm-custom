"use client";

import { motion } from "framer-motion";

interface SpeedLinesProps {
  position: "left" | "right";
  className?: string;
}

/* Lignes de vitesse décoratives — effet de mouvement subtil */
const lines = [
  { width: "40%", top: "15%", opacity: 0.06, delay: 0 },
  { width: "55%", top: "30%", opacity: 0.08, delay: 0.1 },
  { width: "30%", top: "45%", opacity: 0.05, delay: 0.2 },
  { width: "65%", top: "60%", opacity: 0.07, delay: 0.15 },
  { width: "35%", top: "75%", opacity: 0.04, delay: 0.25 },
  { width: "50%", top: "88%", opacity: 0.06, delay: 0.05 },
];

export const SpeedLines = ({ position, className = "" }: SpeedLinesProps) => {
  const isLeft = position === "left";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
          whileInView={{ opacity: line.opacity, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: line.delay, ease: "easeOut" }}
          className="absolute h-px bg-gradient-to-r from-gold to-transparent"
          style={{
            width: line.width,
            top: line.top,
            ...(isLeft ? { left: 0 } : { right: 0 }),
            ...(isLeft
              ? {}
              : { background: "linear-gradient(to left, var(--color-gold), transparent)" }),
          }}
        />
      ))}
    </div>
  );
};
