import Link from "next/link";

// Liens de navigation rapide
const quickLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#before-after" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-dark-lighter border-t border-gold/30">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Grille 3 colonnes desktop, empilé mobile */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Colonne 1 — Marque */}
          <div>
            <span className="font-display text-gold text-2xl">BM Custom</span>
            <p className="mt-3 text-sm text-gray-400">
              Spécialiste en customisation automobile. Transformez votre véhicule
              avec nos services premium.
            </p>
          </div>

          {/* Colonne 2 — Liens rapides */}
          <div>
            <h3 className="font-semibold text-white">Liens rapides</h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:contact@bm-custom.com"
                  className="transition-colors hover:text-gold"
                >
                  contact@bm-custom.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33600000000"
                  className="transition-colors hover:text-gold"
                >
                  06 XX XX XX XX
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bm_customm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  {/* Icône Instagram SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  @bm_customm
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas — Copyright */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 BM Custom. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
