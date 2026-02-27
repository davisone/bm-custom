"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SparkEffect } from "@/components/ui/spark-effect";

/* Photo d'arrière d'une Porsche sur fond sombre — ambiance dramatique */
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2560&q=80";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      {/* Image de fond — voiture émergeant de l'obscurité */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE_URL}
          alt="Véhicule customisé dans l'obscurité"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </div>

      {/* Overlay sombre principal */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Halo rouge/orange atmosphérique — effet dramatique */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(180, 50, 20, 0.25) 0%, rgba(120, 30, 10, 0.1) 40%, transparent 70%)",
        }}
      />

      {/* Vignette sombre sur les bords */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      />

      {/* Étincelles flottantes */}
      <SparkEffect className="z-[5]" />

      {/* Dégradé bas pour transition douce vers la section suivante */}
      <div className="absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-t from-dark via-dark/80 to-transparent" />

      {/* Contenu centré */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Titre principal — dégradé rouge → blanc */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-8xl"
        >
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
            Sublimez Votre
          </span>
          <br />
          <span className="text-white">Véhicule</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-6 max-w-2xl text-sm tracking-wide text-gray-400 sm:text-base"
        >
          Spécialiste en customisation automobile depuis 4 ans
        </motion.p>

        {/* Bouton CTA — style outline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-2 border border-white/30 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white/10 sm:px-10 sm:py-4"
          >
            Découvrir nos services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>

        {/* Indicateur scroll */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 text-xs uppercase tracking-[0.3em] text-gray-500"
        >
          Défiler pour découvrir
        </motion.p>
      </div>
    </section>
  );
};
