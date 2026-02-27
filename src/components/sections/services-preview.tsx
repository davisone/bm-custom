"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Services avec images pour la page d'accueil */
const servicesList = [
  {
    title: "LED d'ambiance",
    description: "Éclairage LED personnalisé pour sublimer votre intérieur.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=400&h=400&fit=crop",
  },
  {
    title: "Ciel étoilé",
    description: "Fibre optique intégrée au plafond pour un effet unique.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=400&fit=crop",
  },
  {
    title: "CarPlay",
    description: "Connectez votre iPhone à votre véhicule en toute simplicité.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=400&fit=crop",
  },
  {
    title: "Nettoyage",
    description: "Nettoyage professionnel intérieur et extérieur.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=400&fit=crop",
  },
  {
    title: "Polissage",
    description: "Correction de peinture pour un éclat parfait.",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&h=400&fit=crop",
  },
  {
    title: "Covering",
    description: "Personnalisez l'apparence de votre véhicule.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=400&fit=crop",
  },
];

/* Carte qui se retourne au hover — face avant: image + titre, face arrière: description */
const FlipCard = ({ service, index }: { service: typeof servicesList[number]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group h-52 [perspective:1000px] sm:h-56 md:h-60"
    >
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Face avant — Image + titre */}
        <div className="absolute inset-0 overflow-hidden rounded-xl [backface-visibility:hidden]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover"
          />
          {/* Overlay sombre + titre */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="font-display text-lg font-semibold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Face arrière — Description */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-gold/30 bg-dark-card p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="mb-3 h-1 w-10 rounded-full bg-gold" />
          <h3 className="font-display text-lg font-semibold text-gold">
            {service.title}
          </h3>
          <p className="mt-3 text-center text-sm leading-relaxed text-white/70">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesPreview = () => {
  return (
    <section className="bg-dark px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Nos <span className="text-gold">Services</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gold" />
        </motion.div>

        {/* Grille de cartes flip */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <FlipCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Sous-texte */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-white/50"
        >
          Et bien plus encore — chaque véhicule est un projet unique.
        </motion.p>
      </div>
    </section>
  );
};
