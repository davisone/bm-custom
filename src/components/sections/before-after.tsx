"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

/* Aperçu de quelques réalisations supplémentaires */
const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    title: "LED d'ambiance",
    tag: "Éclairage",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    title: "Ciel étoilé",
    tag: "Intérieur",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    title: "CarPlay",
    tag: "Multimédia",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    title: "Covering complet",
    tag: "Extérieur",
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 inline-block align-middle text-gold/30"
            aria-hidden="true"
          >
            <rect x="0" y="0" width="5" height="5" fill="currentColor" />
            <rect x="10" y="0" width="5" height="5" fill="currentColor" />
            <rect x="5" y="5" width="5" height="5" fill="currentColor" />
            <rect x="15" y="5" width="5" height="5" fill="currentColor" />
            <rect x="0" y="10" width="5" height="5" fill="currentColor" />
            <rect x="10" y="10" width="5" height="5" fill="currentColor" />
            <rect x="5" y="15" width="5" height="5" fill="currentColor" />
            <rect x="15" y="15" width="5" height="5" fill="currentColor" />
          </svg>
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
      </motion.div>

      {/* Curseur de comparaison avant/après */}
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
          <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Avant
          </span>
          <span className="pointer-events-none absolute right-3 top-3 rounded bg-gold/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dark">
            Après
          </span>
        </div>

        {/* Label de la comparaison active */}
        <p className="mt-4 text-center font-display text-lg font-semibold text-gold md:text-xl">
          {comparisons[activeIndex].label}
        </p>

        {/* Navigation : flèches + dots */}
        <div className="mt-6 flex items-center justify-center gap-6">
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

      {/* Grille d'aperçu des projets */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gold sm:text-xs">
                {project.tag}
              </span>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                {project.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA vers la page réalisations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Link
          href="/realisations"
          className="inline-flex items-center gap-2 border border-gold/40 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-gold transition-all hover:border-gold hover:bg-gold/10"
        >
          Voir toutes nos réalisations
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};
