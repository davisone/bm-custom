"use client";

import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { motion, AnimatePresence } from "framer-motion";
/* Données des comparaisons avant/après */
const comparisons = [
  {
    before:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    label: "LED d'ambiance",
  },
  {
    before:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    label: "Ciel étoilé",
  },
  {
    before:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    label: "CarPlay",
  },
];

export const BeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? comparisons.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === comparisons.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section id="before-after" className="bg-dark px-4 py-20 md:px-8 lg:px-16">
      {/* Titre de section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Nos <span className="text-gold">Réalisations</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
      </motion.div>

      {/* Curseur de comparaison */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="aspect-video"
            >
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={comparisons[activeIndex].before}
                    alt={`${comparisons[activeIndex].label} — Avant`}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={comparisons[activeIndex].after}
                    alt={`${comparisons[activeIndex].label} — Après`}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                }
                position={50}
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Badges Avant / Après */}
          <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
            Avant
          </span>
          <span className="pointer-events-none absolute right-3 top-3 rounded bg-gold/80 px-3 py-1 text-xs font-semibold tracking-wide text-dark uppercase">
            Après
          </span>
        </div>

        {/* Label de la comparaison active */}
        <p className="mt-4 text-center font-display text-lg font-semibold text-gold md:text-xl">
          {comparisons[activeIndex].label}
        </p>

        {/* Navigation : flèches + dots */}
        <div className="mt-6 flex items-center justify-center gap-6">
          {/* Flèche gauche */}
          <button
            onClick={goToPrevious}
            aria-label="Réalisation précédente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {comparisons.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Voir la réalisation ${index + 1}`}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-125 bg-gold"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Flèche droite */}
          <button
            onClick={goToNext}
            aria-label="Réalisation suivante"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
