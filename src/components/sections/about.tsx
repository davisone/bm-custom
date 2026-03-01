"use client";

import { motion } from "framer-motion";

/* Image de fond — intérieur automobile / tableau de bord */
const BG_IMAGE =
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2560&q=80";

/* Chiffres clés de l'entreprise */
const stats = [
  { value: "7+", label: "Années d'expérience" },
  { value: "500+", label: "Véhicules transformés" },
  { value: "100%", label: "Satisfaction client" },
  { value: "6", label: "Services proposés" },
];

/* Services officiels */
const expertises = [
  "Nettoyage automobile",
  "Lustrage & Polissage",
  "Préparation esthétique",
  "Covering",
  "Ajout d'options",
  "Customisation intérieure",
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-fixed bg-cover bg-center px-4 py-20 md:px-8 lg:px-16"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative mx-auto max-w-7xl">
        {/* Titre de section */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            À propos de{" "}
            <span className="text-gold">BM Custom</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne gauche — Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl font-semibold text-gold md:text-3xl">
              Velat BINGOL
            </h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/50">
              Fondateur de BM Customm
            </p>

            <p className="mt-6 leading-relaxed text-white/80">
              Passionné d&apos;automobile depuis toujours, Velat a fondé BM Customm
              avec une vision claire : sublimer chaque véhicule en lui apportant une
              touche unique et personnalisée. Fort de plus de 7 ans d&apos;expérience
              dans la préparation esthétique et la customisation automobile, il met
              son savoir-faire au service de clients exigeants.
            </p>

            <p className="mt-4 leading-relaxed text-white/80">
              Basé à Corps-Nuds, près de Rennes, notre atelier est équipé pour
              répondre à toutes vos demandes : du simple nettoyage professionnel
              à la transformation complète de votre habitacle avec ciel étoilé,
              LED d&apos;ambiance ou installation CarPlay.
            </p>

            <p className="mt-4 leading-relaxed text-white/80">
              Chaque projet est unique. Nous prenons le temps d&apos;écouter vos
              envies pour vous proposer un résultat à la hauteur de vos attentes.
            </p>

            {/* Expertises */}
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
                Nos expertises
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertises.map((expertise) => (
                  <span
                    key={expertise}
                    className="rounded-full border border-gold/30 px-4 py-1.5 text-sm text-white/70"
                  >
                    {expertise}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Colonne droite — Chiffres clés */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-dark-card p-8 text-center"
              >
                <span className="font-display text-4xl font-bold text-gold md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-white/60">
                  {stat.label}
                </span>
              </motion.div>
            ))}

            {/* Carte localisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="col-span-2 flex items-center gap-4 rounded-2xl border border-gold/20 bg-dark-card p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-6 w-6 text-gold"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">Corps-Nuds, Rennes</p>
                <p className="text-sm text-white/50">ZAC des Grands Sillons, 35150</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
