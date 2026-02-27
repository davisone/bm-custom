"use client";

import { motion } from "framer-motion";

/* Aperçu rapide des services pour la page d'accueil */
const servicesList = [
  {
    icon: "💡",
    title: "LED d'ambiance",
  },
  {
    icon: "✨",
    title: "Ciel étoilé",
  },
  {
    icon: "📱",
    title: "CarPlay",
  },
  {
    icon: "🧼",
    title: "Nettoyage",
  },
  {
    icon: "🪞",
    title: "Polissage",
  },
  {
    icon: "🎨",
    title: "Covering",
  },
];

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

        {/* Grille compacte */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-dark-card p-5 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10"
            >
              <span className="text-3xl">{service.icon}</span>
              <span className="text-center text-sm font-medium text-white/80">
                {service.title}
              </span>
            </motion.div>
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
