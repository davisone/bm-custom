"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Données des avis Google — tous 5/5 */
const reviews = [
  {
    name: "Morgane F",
    date: "il y a un mois",
    text: "Je suis vraiment ravie du travail de BM Custom ! Il a installé des LED et un ciel étoilé dans ma voiture, et le résultat est juste incroyable. Tout est parfaitement fait, proprement installé et avec beaucoup de soin. Le rendu est magique, classe et ultra esthétique, exactement ce que je voulais.",
  },
  {
    name: "Manzi Arnauld",
    date: "il y a un mois",
    text: "Très satisfait du travail réalisé ! Installation de LED intérieur voiture, CarPlay et polissage de la carrosserie effectués avec beaucoup de professionnalisme. L'équipe est sérieuse, arrangeante et à l'écoute. Le travail est propre, soigné et le résultat est vraiment top. Je recommande cette entreprise les yeux fermés !",
  },
  {
    name: "M'hammed Bouzoubaa",
    date: "il y a un mois",
    text: "Le travail de BM Custom est impeccable. J'ai fait un lustrage plus un traitement céramique sur une Jaguar XF, le résultat est bluffant. Le gars est vraiment très sympa, doué et super pro, on voit bien qu'il est passionné par ce qu'il fait. Niveau prix rien à dire, c'est super. Je recommande fortement.",
  },
  {
    name: "Antoine Le Lagadec",
    date: "il y a un mois",
    text: "Très professionnel, le résultat est impeccable. J'ai ramené mon véhicule un lundi, 2 jours après le travail était déjà fait. Je recommande fortement.",
  },
  {
    name: "Anthony Lemoingt",
    date: "il y a 3 semaines",
    text: "Propriétaire d'une A5 coupé, je l'ai laissée ce matin pour un lustrage. Je suis très satisfait du résultat et je recommande fortement. Travail professionnel, à l'écoute de ses clients et super sympa.",
  },
  {
    name: "Tom Pichon",
    date: "il y a un mois",
    text: "J'ai eu une très bonne expérience, il est très réactif sur les messages et sur ce qu'on lui demande de réaliser, il saura vous conseiller et il fait un très bon boulot, il est très consciencieux dans ce qu'il fait. Je vous conseille d'y aller les yeux fermés.",
  },
  {
    name: "Nelson Jose",
    date: "il y a 4 mois",
    text: "Professionnels à l'écoute et très sérieux, je suis de Rennes je devais aller à Brest pour faire installer mon boîtier CarPlay.",
  },
  {
    name: "Adriano Raducanu",
    date: "il y a 6 mois",
    text: "Passé ce jour pour un nettoyage intérieur complet. Prestation effectuée à merveille, rapide, abordable et efficace !! Je recommande fortement les yeux fermés.",
  },
  {
    name: "Black Mamba",
    date: "il y a 9 mois",
    text: "Professionnel dans son métier, ayant fait installer des LED d'ambiance à BM Custom le résultat est incroyable.",
  },
  {
    name: "Ahmet Have",
    date: "il y a 7 mois",
    text: "J'ai confié mon véhicule pour un nettoyage intérieur et le rendu m'a bluffé sincèrement. Très pro, rien à dire !",
  },
  {
    name: "Elise Poulain",
    date: "il y a 2 semaines",
    text: "Parfait, la voiture est ressortie impeccable !",
  },
  {
    name: "Manory R",
    date: "il y a 2 semaines",
    text: "Je recommande !",
  },
];

/* Étoile SVG */
const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4 text-gold"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/* Logo Google SVG */
const GoogleLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

/* Initiales colorées pour l'avatar */
const getInitials = (name: string) => {
  const parts = name.split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

/* Couleurs d'avatar déterministes */
const avatarColors = [
  "bg-blue-600",
  "bg-emerald-600",
  "bg-purple-600",
  "bg-rose-600",
  "bg-amber-600",
  "bg-cyan-600",
  "bg-indigo-600",
  "bg-teal-600",
  "bg-orange-600",
  "bg-pink-600",
  "bg-lime-600",
  "bg-violet-600",
];

/* Nombre de slides visibles selon la taille */
const AUTOPLAY_INTERVAL = 5000;

export const GoogleReviews = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = reviews.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  /* Autoplay */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  /* 3 avis visibles en boucle */
  const visibleIndices = [
    current,
    (current + 1) % totalSlides,
    (current + 2) % totalSlides,
  ];

  return (
    <section className="bg-dark px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ce que disent nos{" "}
            <span className="text-gold">Clients</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gold" />
          {/* Note globale */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <GoogleLogo />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <span className="text-sm text-white/60">
              5/5 — {reviews.length} avis
            </span>
          </div>
        </motion.div>

        {/* Carrousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cartes — desktop: 3 visibles, tablette: 2, mobile: 1 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((reviewIndex, i) => {
                const review = reviews[reviewIndex];
                return (
                  <motion.div
                    key={`${reviewIndex}-${current}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`rounded-xl border border-white/10 bg-dark-card p-6 ${
                      i === 1 ? "hidden sm:block" : ""
                    } ${i === 2 ? "hidden lg:block" : ""}`}
                  >
                    {/* En-tête de l'avis */}
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColors[reviewIndex % avatarColors.length]}`}
                      >
                        {getInitials(review.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-white">
                          {review.name}
                        </p>
                        <p className="text-xs text-white/40">{review.date}</p>
                      </div>
                    </div>

                    {/* Étoiles */}
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} />
                      ))}
                    </div>

                    {/* Texte de l'avis */}
                    <p className="line-clamp-4 text-sm leading-relaxed text-white/70">
                      {review.text}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Avis précédents"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-gold hover:text-gold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Indicateurs */}
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Aller à l'avis ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-gold"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Avis suivants"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-gold hover:text-gold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
