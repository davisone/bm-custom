"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

/* Chiffres clés */
const figures = [
  { value: 50, suffix: "+", label: "Véhicules personnalisés" },
  { value: 4, suffix: " ans", label: "D'expérience" },
  { value: 19, suffix: "", label: "Avis 5/5 sur Google" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
];

/* Compteur animé */
const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gold md:text-5xl">
      0{suffix}
    </span>
  );
};

export const KeyFigures = () => {
  return (
    <section className="bg-dark px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {figures.map((figure, index) => (
            <motion.div
              key={figure.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber value={figure.value} suffix={figure.suffix} />
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50">
                {figure.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
