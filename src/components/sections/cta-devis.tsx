"use client";

import { motion } from "framer-motion";

export const CtaDevis = () => {
  return (
    <section className="bg-dark px-4 py-20 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl rounded-2xl border border-gold/20 bg-dark-card p-10 text-center md:p-14"
      >
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Un projet en tête ?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/60">
          Décrivez-nous votre véhicule et vos envies, nous vous enverrons un
          devis personnalisé sous 24h.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-gold px-8 py-3 font-semibold text-dark transition-colors hover:bg-gold-light"
          >
            Demander un devis
          </a>
          <a
            href="https://www.instagram.com/bm_customm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:border-gold hover:text-gold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            Nous contacter
          </a>
        </div>
      </motion.div>
    </section>
  );
};
