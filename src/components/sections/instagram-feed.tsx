import Image from "next/image";
import { fetchInstagramPosts } from "@/lib/instagram";
import type { InstagramPost } from "@/lib/instagram";

// Images de fallback Unsplash (voitures de luxe / custom)
const fallbackImages = [
  {
    id: "fallback-1",
    src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=600&fit=crop&crop=center",
    alt: "Voiture de luxe noire détaillée",
  },
  {
    id: "fallback-2",
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop&crop=center",
    alt: "Voiture sportive rouge",
  },
  {
    id: "fallback-3",
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=600&fit=crop&crop=center",
    alt: "Détail carrosserie automobile",
  },
  {
    id: "fallback-4",
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=600&fit=crop&crop=center",
    alt: "Voiture de sport jaune",
  },
  {
    id: "fallback-5",
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=600&fit=crop&crop=center",
    alt: "Voiture custom détaillée",
  },
  {
    id: "fallback-6",
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=600&fit=crop&crop=center",
    alt: "Voiture de luxe blanche",
  },
  {
    id: "fallback-7",
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=600&fit=crop&crop=center",
    alt: "BMW sportive",
  },
  {
    id: "fallback-8",
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=600&fit=crop&crop=center",
    alt: "Voiture de collection",
  },
];

// Icône Instagram en SVG
const InstagramIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

// Carte de post Instagram (utilisée quand l'API renvoie des posts)
const PostCard = ({ post }: { post: InstagramPost }) => (
  <a
    href={post.permalink}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative aspect-square overflow-hidden rounded-lg"
  >
    <Image
      src={post.mediaUrl}
      alt={post.caption.slice(0, 100) || "Post Instagram"}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Overlay au survol */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="text-white">
        <InstagramIcon />
      </div>
    </div>
  </a>
);

// Carte de fallback avec image Unsplash
const FallbackCard = ({
  image,
}: {
  image: (typeof fallbackImages)[number];
}) => (
  <div className="group relative aspect-square overflow-hidden rounded-lg">
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Overlay permanent léger + renforcement au survol */}
    <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/60" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="text-white">
        <InstagramIcon />
      </div>
    </div>
  </div>
);

export const InstagramFeed = async () => {
  const posts = await fetchInstagramPosts();
  const hasPosts = posts.length > 0;

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

        {/* Grille de posts ou fallback */}
        {hasPosts ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {fallbackImages.map((image) => (
              <FallbackCard key={image.id} image={image} />
            ))}
          </div>
        )}

        {/* Bouton vers Instagram */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/bm_customm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-gold bg-transparent px-8 py-3 font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-dark"
          >
            <InstagramIcon className="h-5 w-5" />
            <span>Voir sur Instagram</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
