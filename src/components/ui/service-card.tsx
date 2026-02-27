"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  index: number;
}

/* URLs Unsplash temporaires en attendant les vraies images */
const unsplashImages: Record<string, string> = {
  "LED d'ambiance":
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
  "Ciel étoilé":
    "https://images.unsplash.com/photo-1534996858221-380b92700493?w=600&h=400&fit=crop",
  CarPlay:
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop",
  Nettoyage:
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop",
  Polissage:
    "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop",
  Jantes:
    "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=600&h=400&fit=crop",
};

export const ServiceCard = ({
  title,
  description,
  index,
}: ServiceCardProps) => {
  const imageSrc = unsplashImages[title] ?? "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-transparent bg-dark-card transition-all hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
