"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SparkEffect } from "@/components/ui/spark-effect";

/* URL de l'image de fond — intérieur luxe automobile via Unsplash */
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2560&q=80";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen">
      {/* Image de fond */}
      <Image
        src={HERO_IMAGE_URL}
        alt="Intérieur luxueux d'un véhicule customisé"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Étincelles flottantes */}
      <SparkEffect className="z-[5]" />

      {/* Dégradé bas pour transition douce vers la section suivante */}
      <div className="absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-dark to-transparent" />

      {/* Contenu centré */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-4xl font-bold text-white sm:text-5xl md:text-7xl"
        >
          Sublimez Votre Véhicule
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-gray-300 sm:text-lg"
        >
          Spécialiste en customisation automobile depuis 4 ans
        </motion.p>

        {/* Bouton CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <a
            href="#services"
            className="mt-10 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-gold-light sm:px-8 sm:py-4"
          >
            Découvrir nos services
          </a>
        </motion.div>
      </div>
    </section>
  );
};
