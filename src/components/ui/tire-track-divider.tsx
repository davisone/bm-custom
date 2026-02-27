"use client";

import { motion } from "framer-motion";

interface TireTrackDividerProps {
  className?: string;
}

/* Séparateur décoratif reprenant un motif de trace de pneu (chevron/herringbone) */
export const TireTrackDivider = ({ className = "" }: TireTrackDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full overflow-hidden py-4 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-full text-gold/10 md:h-14"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Motif chevron répétitif simulant une empreinte de pneu */}
          <pattern
            id="tire-tread"
            x="0"
            y="0"
            width="40"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            {/* Chevron central */}
            <path
              d="M20 5 L30 25 L20 45 L10 25 Z"
              fill="currentColor"
              opacity="0.6"
            />
            {/* Petites marques latérales gauche */}
            <rect x="2" y="10" width="6" height="3" rx="1" fill="currentColor" opacity="0.4" />
            <rect x="2" y="22" width="6" height="3" rx="1" fill="currentColor" opacity="0.4" />
            <rect x="2" y="34" width="6" height="3" rx="1" fill="currentColor" opacity="0.4" />
            {/* Petites marques latérales droite */}
            <rect x="32" y="10" width="6" height="3" rx="1" fill="currentColor" opacity="0.4" />
            <rect x="32" y="22" width="6" height="3" rx="1" fill="currentColor" opacity="0.4" />
            <rect x="32" y="34" width="6" height="3" rx="1" fill="currentColor" opacity="0.4" />
            {/* Rainures en V */}
            <path
              d="M14 8 L20 18 L26 8"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M14 42 L20 32 L26 42"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="1200" height="50" fill="url(#tire-tread)" />
      </svg>
    </motion.div>
  );
};
