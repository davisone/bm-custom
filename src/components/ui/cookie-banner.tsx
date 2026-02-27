"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "bm-cookie-consent";

/** Bannière de consentement cookies conforme RGPD */
export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/30 bg-dark-lighter/95 px-4 py-4 backdrop-blur-sm md:px-8"
      role="dialog"
      aria-label="Consentement cookies"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/80">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          En savoir plus dans notre{" "}
          <Link
            href="/politique-cookies"
            className="text-gold underline underline-offset-2 transition-colors hover:text-gold-light"
          >
            politique de cookies
          </Link>
          .
        </p>

        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleRefuse}
            className="rounded-lg border border-white/20 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-gold px-5 py-2 text-sm font-medium text-dark transition-colors hover:bg-gold-light"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};
