import Script from "next/script";

export const InstagramFeed = () => {
  return (
    <section id="instagram" className="bg-dark-lighter px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Titre de section */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Suivez-nous sur{" "}
            <span className="text-gold">Instagram</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Découvrez nos dernières réalisations et les coulisses de notre
            atelier sur Instagram.
          </p>
        </div>

        {/* Widget Elfsight Instagram Feed */}
        <div className="elfsight-app-9fff25d6-d5c8-4829-a7ee-17229bdfa266" data-elfsight-app-lazy />
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

        {/* Bouton vers Instagram */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/bm_customm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-gold bg-transparent px-8 py-3 font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-dark"
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
            <span>Voir sur Instagram</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
