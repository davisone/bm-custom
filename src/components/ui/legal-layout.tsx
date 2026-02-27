import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

/** Layout réutilisable pour toutes les pages légales */
export const LegalLayout = ({ title, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Lien retour accueil */}
      <div className="mx-auto max-w-4xl px-4 pt-8 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gold"
        >
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
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </div>

      {/* En-tête */}
      <header className="mx-auto max-w-4xl px-4 pt-8 pb-6 md:px-8">
        <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
          <span className="text-gold">— </span>
          {title}
        </h1>
      </header>

      {/* Contenu */}
      <main className="mx-auto max-w-4xl px-4 pb-16 md:px-8">
        <div className="legal-content space-y-8 text-white/80 leading-relaxed [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gold [&_h2]:md:text-2xl [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-white [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-gold-light [&_strong]:text-white">
          {children}
        </div>
      </main>
    </div>
  );
};
