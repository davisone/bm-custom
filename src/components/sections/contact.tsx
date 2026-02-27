"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { FormEvent } from "react";

/* Options du select "Type de prestation" */
const serviceOptions = [
  "LED d'ambiance",
  "Ciel étoilé",
  "CarPlay",
  "Nettoyage",
  "Polissage",
  "Jantes",
];

/* Icônes SVG simples */
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13L2 4" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* Informations de contact */
const contactItems = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "contact@bm-custom.com",
    href: "mailto:contact@bm-custom.com",
  },
  {
    icon: <PhoneIcon />,
    label: "Téléphone",
    value: "06 XX XX XX XX",
    href: "tel:+33600000000",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    value: "@bm_customm",
    href: "https://www.instagram.com/bm_customm",
  },
  {
    icon: <LocationIcon />,
    label: "Localisation",
    value: "Rennes, France",
    href: null,
  },
];

/* Styles communs aux champs de formulaire */
const inputClasses =
  "w-full rounded-lg border border-white/10 bg-dark-card px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-gold";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-dark px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Titre de section */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Demandez un <span className="text-gold">devis</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </div>

        {/* Grille 2 colonnes */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Colonne gauche — Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-xl border border-gold/20 bg-dark-card p-10">
                <p className="text-center text-lg font-semibold text-gold">
                  Votre demande a été envoyée !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-gray-400">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className={inputClasses}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    className={inputClasses}
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm text-gray-400">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="06 XX XX XX XX"
                    className={inputClasses}
                  />
                </div>

                {/* Type de prestation */}
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm text-gray-400">
                    Type de prestation
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Choisissez une prestation
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Décrivez votre projet..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Bouton envoyer */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-8 py-3 font-semibold text-black transition-colors hover:bg-gold-light"
                >
                  Envoyer
                </button>
              </form>
            )}
          </motion.div>

          {/* Colonne droite — Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Séparateur décoratif doré */}
            <div className="mb-2 h-1 w-12 rounded-full bg-gold" />

            <p className="text-lg text-gray-400">
              Une question ou un projet en tête ? Contactez-nous et recevez un
              devis personnalisé sous 24h.
            </p>

            <div className="space-y-4">
              {contactItems.map((item) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-lg border border-white/5 bg-dark-card p-4 transition-colors hover:border-gold/30">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
