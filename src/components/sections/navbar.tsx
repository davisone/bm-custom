"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Liens de navigation */
const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#before-after" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contact", href: "#contact" },
] as const;

/* Icône panier (SVG) */
const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

/* Icône hamburger */
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

/* Icône fermer */
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* Variantes d'animation pour le menu mobile */
const overlayVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "tween" as const, duration: 0.3, ease: "easeOut" as const } },
  exit: { x: "100%", transition: { type: "tween" as const, duration: 0.25, ease: "easeIn" as const } },
};

const linkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
  }),
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* Détection du scroll pour changer le fond de la navbar */
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Initialiser l'état du scroll au montage sans setState synchrone dans useEffect */
  useEffect(() => {
    const initialScrolled = window.scrollY > 50;
    if (initialScrolled) {
      requestAnimationFrame(() => setIsScrolled(true));
    }
  }, []);

  /* Fermer le menu mobile lors du clic sur un lien */
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  /* Empêcher le scroll du body quand le menu mobile est ouvert */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark/95 backdrop-blur-sm shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="font-display text-2xl font-bold text-gold transition-colors hover:text-gold-light"
            >
              BM Custom
            </a>

            {/* Liens de navigation (desktop) */}
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions à droite */}
            <div className="flex items-center gap-4">
              {/* Icône panier */}
              <button
                type="button"
                aria-label="Panier"
                className="text-white/80 transition-colors hover:text-gold"
              >
                <CartIcon />
              </button>

              {/* Bouton menu mobile */}
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                className="text-white/80 transition-colors hover:text-gold md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu mobile en plein écran */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-dark/98 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-display text-2xl font-medium text-white transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Bouton panier dans le menu mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              className="mt-12"
            >
              <button
                type="button"
                aria-label="Panier"
                onClick={handleLinkClick}
                className="flex items-center gap-2 text-gold transition-colors hover:text-gold-light"
              >
                <CartIcon />
                <span className="font-medium">Panier</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
