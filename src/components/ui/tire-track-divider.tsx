"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TireTrackDividerProps {
  className?: string;
}

/* Séparateur décoratif avec image de trace de pneu */
export const TireTrackDivider = ({ className = "" }: TireTrackDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full overflow-hidden py-2 ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/trace-de-pneu.png"
        alt=""
        width={1440}
        height={100}
        className="h-12 w-full object-cover opacity-10 brightness-200 md:h-16"
        priority={false}
      />
    </motion.div>
  );
};
