"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Produits / prestations de la boutique */
const products = [
  {
    id: "led-ambiance",
    name: "LED d'ambiance",
    description: "Éclairage LED personnalisé pour sublimer l'intérieur de votre véhicule.",
    price: "À partir de 149€",
    badge: "Populaire",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=500&fit=crop",
  },
  {
    id: "ciel-etoile",
    name: "Ciel étoilé",
    description: "Fibre optique intégrée au plafond pour un effet ciel étoilé unique.",
    price: "À partir de 299€",
    badge: "Best-seller",
    image: "https://images.unsplash.com/photo-1534996858221-380b92700493?w=500&h=500&fit=crop",
  },
  {
    id: "carplay",
    name: "CarPlay",
    description: "Installation Apple CarPlay pour connecter votre iPhone à votre véhicule.",
    price: "À partir de 199€",
    badge: null,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&h=500&fit=crop",
  },
  {
    id: "nettoyage",
    name: "Nettoyage complet",
    description: "Nettoyage professionnel intérieur et extérieur de votre véhicule.",
    price: "À partir de 79€",
    badge: null,
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=500&h=500&fit=crop",
  },
  {
    id: "polissage",
    name: "Polissage",
    description: "Correction de peinture et polissage professionnel pour un éclat parfait.",
    price: "À partir de 129€",
    badge: null,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&h=500&fit=crop",
  },
  {
    id: "covering",
    name: "Covering",
    description: "Personnalisez l'apparence de votre véhicule avec un covering sur-mesure.",
    price: "Sur devis",
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=500&h=500&fit=crop",
  },
  {
    id: "jantes",
    name: "Jantes",
    description: "Rénovation et personnalisation de jantes pour un look unique.",
    price: "Sur devis",
    badge: null,
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=500&h=500&fit=crop",
  },
  {
    id: "pack-complet",
    name: "Pack complet",
    description: "Transformation intégrale : LED, ciel étoilé, CarPlay, nettoyage et polissage.",
    price: "Sur devis",
    badge: "Meilleure offre",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=500&fit=crop",
  },
];

/* Couleurs des badges */
const badgeColors: Record<string, string> = {
  "Populaire": "bg-gold text-dark",
  "Best-seller": "bg-gold text-dark",
  "Nouveau": "bg-emerald-500 text-white",
  "Meilleure offre": "bg-gold text-dark",
};

export const Shop = () => {
  return (
    <section id="boutique" className="bg-dark-lighter px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Titre de section */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Notre{" "}
            <span className="text-gold">Boutique</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Découvrez nos prestations et commandez directement en ligne.
            Livraison et installation disponibles.
          </p>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-card transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge */}
                {product.badge && (
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${badgeColors[product.badge] ?? "bg-gold text-dark"}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {product.description}
                </p>

                {/* Prix + bouton */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-gold">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
                  >
                    {product.price === "Sur devis" ? "Devis" : "Ajouter"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
