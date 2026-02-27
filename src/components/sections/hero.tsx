"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparkEffect } from "@/components/ui/spark-effect";

/* Image A — intérieur luxe automobile (départ, visible au chargement) */
const HERO_IMAGE_A =
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2560&q=80";

/* Image B — extérieur véhicule customisé (destination, révélée par l'animation) */
const HERO_IMAGE_B =
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2560&q=80";

/* Voiture PNG détourée — traverse le hero de gauche à droite */
const CAR_IMAGE = "/car-silhouette.png";

export const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Couche 1 : Image B (destination) — toujours visible en dessous */}
      <Image
        src={HERO_IMAGE_B}
        alt="Véhicule customisé"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Couche 2 : Image A (départ) — masquée progressivement par clipPath */}
      <motion.div
        className="absolute inset-0"
        animate={
          hasAnimated
            ? { clipPath: "inset(0 0 0 100%)" }
            : { clipPath: "inset(0 0 0 0%)" }
        }
        transition={{ duration: 2, ease: "easeInOut", delay: 0.15 }}
      >
        <Image
          src={HERO_IMAGE_A}
          alt="Intérieur luxueux d'un véhicule customisé"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Couche 3 : Voiture PNG traversante */}
      <motion.div
        className="pointer-events-none absolute top-1/2 z-[4] h-[200px] w-[60vw] -translate-y-1/2 sm:h-[250px] sm:w-[40vw] md:h-[300px] md:w-[35vw]"
        initial={{ x: "-100%" }}
        animate={hasAnimated ? { x: "calc(100vw + 100%)" } : { x: "-100%" }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={CAR_IMAGE}
          alt=""
          fill
          className="object-contain object-center"
          sizes="40vw"
          aria-hidden
        />
      </motion.div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 z-[5] bg-black/60" />

      {/* Étincelles flottantes */}
      <SparkEffect className="z-[6]" />

      {/* Dégradé bas pour transition douce vers la section suivante */}
      <div className="absolute inset-x-0 bottom-0 z-[6] h-32 bg-gradient-to-t from-dark to-transparent" />

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
