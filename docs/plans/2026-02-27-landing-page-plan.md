# Page d'accueil BM_customm — Plan d'implémentation

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Créer la page d'accueil du site e-commerce BM_customm (custom automobile) — noir et doré, animations Framer Motion, galerie avant/après interactive, feed Instagram réel.

**Architecture:** Landing page Next.js (App Router) en single page avec 7 sections (Navbar, Hero, Services, Avant/Après, Instagram, Contact, Footer). Chaque section est un composant React isolé dans `components/sections/`. Les composants réutilisables (boutons, curseur) vont dans `components/ui/`. Framer Motion pour les animations au scroll.

**Tech Stack:** Next.js 15 (App Router), TypeScript strict, Tailwind CSS, Framer Motion, react-compare-slider, API Instagram Basic Display

---

### Task 1: Initialiser le projet Next.js

**Files:**
- Create: projet Next.js via `create-next-app`
- Modify: `tailwind.config.ts` (couleurs custom)
- Modify: `src/app/globals.css` (reset + base styles)
- Modify: `src/app/layout.tsx` (fonts + metadata)
- Modify: `src/app/page.tsx` (vider le contenu par défaut)

**Step 1: Créer le projet**

```bash
cd /Users/evandavison/IdeaProjects/bm-custom
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Si le dossier n'est pas vide, répondre Yes pour continuer (les fichiers existants comme `docs/` et les PDF seront conservés).

**Step 2: Installer les dépendances**

```bash
npm install framer-motion react-compare-slider
```

**Step 3: Configurer Tailwind avec la charte graphique**

`tailwind.config.ts` — ajouter les couleurs custom dans `extend`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CC6E",
          dark: "#B8960C",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          lighter: "#1A1A1A",
          card: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 4: Configurer le layout global**

`src/app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "BM Custom — Customisation Automobile",
  description:
    "Spécialiste en customisation automobile : LED d'ambiance, ciel étoilé, CarPlay, nettoyage, polissage et jantes.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-dark text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
```

**Step 5: Nettoyer globals.css**

`src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }
}
```

**Step 6: Vider la page d'accueil**

`src/app/page.tsx`:

```typescript
const HomePage = () => {
  return (
    <main>
      <h1 className="text-gold text-4xl text-center py-20">BM Custom</h1>
    </main>
  );
};

export default HomePage;
```

**Step 7: Vérifier que ça tourne**

```bash
npm run dev
```

Ouvrir http://localhost:3000 — on doit voir "BM Custom" en doré sur fond noir.

**Step 8: Init git et commit**

```bash
git init
git add .
git commit -m "feat: initialiser le projet Next.js avec Tailwind et charte graphique"
```

---

### Task 2: Composant Navbar

**Files:**
- Create: `src/components/sections/navbar.tsx`
- Modify: `src/app/page.tsx` (ajouter la Navbar)

**Step 1: Créer le composant Navbar**

`src/components/sections/navbar.tsx`:

Navbar fixe en haut. Fond transparent au départ, fond noir quand on scroll. Logo à gauche, liens au centre, icône panier à droite. Menu hamburger sur mobile.

Fonctionnalités :
- `useState` pour le scroll (fond transparent → noir)
- `useState` pour le menu mobile (ouvert/fermé)
- `useEffect` avec `scroll` event listener
- Directive `"use client"`
- Liens : Accueil, Services, Boutique, À propos, Contact
- Animations avec Framer Motion sur le menu mobile

**Step 2: Intégrer dans page.tsx**

Importer et placer `<Navbar />` en haut de `<main>`.

**Step 3: Vérifier visuellement**

```bash
npm run dev
```

Vérifier : navbar visible, fond change au scroll, menu mobile fonctionne.

**Step 4: Commit**

```bash
git add src/components/sections/navbar.tsx src/app/page.tsx
git commit -m "feat(navbar): ajouter la barre de navigation responsive"
```

---

### Task 3: Section Hero

**Files:**
- Create: `src/components/sections/hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Créer le composant Hero**

`src/components/sections/hero.tsx`:

Section plein écran (h-screen). Image de fond placeholder (Unsplash — voiture de luxe/sport). Overlay sombre. Titre en `font-display` (Playfair), sous-titre, bouton CTA doré.

Fonctionnalités :
- `"use client"` pour Framer Motion
- Animation d'entrée : fade-in + slide-up sur le titre et sous-titre (Framer Motion `motion.div` avec `initial`, `animate`)
- Bouton CTA : `Découvrir nos services` → scroll vers la section services (`href="#services"`)
- Image de fond : utiliser une URL Unsplash directement en background ou `next/image` avec `fill`

**Step 2: Intégrer dans page.tsx**

```typescript
<Navbar />
<Hero />
```

**Step 3: Vérifier visuellement**

Plein écran, image de fond, texte lisible, animation d'entrée, bouton cliquable qui scroll.

**Step 4: Commit**

```bash
git add src/components/sections/hero.tsx src/app/page.tsx
git commit -m "feat(hero): ajouter la section hero plein écran avec animation"
```

---

### Task 4: Section Services

**Files:**
- Create: `src/components/sections/services.tsx`
- Create: `src/components/ui/service-card.tsx`
- Create: `src/lib/data.ts` (données des services)
- Modify: `src/app/page.tsx`

**Step 1: Créer les données des services**

`src/lib/data.ts`:

```typescript
export const services = [
  {
    id: "led-ambiance",
    title: "LED d'ambiance",
    description: "Transformez l'intérieur de votre véhicule avec un éclairage LED personnalisé.",
    image: "/images/services/led.jpg",
  },
  {
    id: "ciel-etoile",
    title: "Ciel étoilé",
    description: "Recréez un ciel étoilé dans votre habitacle pour une ambiance unique.",
    image: "/images/services/ciel-etoile.jpg",
  },
  {
    id: "carplay",
    title: "CarPlay",
    description: "Installation CarPlay pour connecter votre iPhone à votre véhicule.",
    image: "/images/services/carplay.jpg",
  },
  {
    id: "nettoyage",
    title: "Nettoyage",
    description: "Nettoyage professionnel intérieur et extérieur de votre véhicule.",
    image: "/images/services/nettoyage.jpg",
  },
  {
    id: "polissage",
    title: "Polissage",
    description: "Redonnez de l'éclat à votre carrosserie avec un polissage professionnel.",
    image: "/images/services/polissage.jpg",
  },
  {
    id: "jantes",
    title: "Jantes",
    description: "Personnalisation et rénovation de jantes pour un look unique.",
    image: "/images/services/jantes.jpg",
  },
];
```

Note : Les images n'existent pas encore, utiliser des placeholders Unsplash dans le composant en attendant.

**Step 2: Créer le composant ServiceCard**

`src/components/ui/service-card.tsx`:

Carte avec image en haut, titre et description. Bordure dorée subtile au hover. Animation fade-in au scroll via Framer Motion `whileInView`.

**Step 3: Créer la section Services**

`src/components/sections/services.tsx`:

- `id="services"` (pour le scroll depuis le hero)
- Titre de section "Nos Services" en `font-display`
- Grille responsive : 1 col mobile, 2 cols tablette, 3 cols desktop
- Map sur `services` pour afficher les `ServiceCard`
- Animations staggered au scroll (chaque carte apparaît avec un léger délai)

**Step 4: Intégrer dans page.tsx**

**Step 5: Vérifier visuellement**

Grille correcte, cartes responsives, animations au scroll fluides.

**Step 6: Commit**

```bash
git add src/components/sections/services.tsx src/components/ui/service-card.tsx src/lib/data.ts src/app/page.tsx
git commit -m "feat(services): ajouter la section services avec grille de cartes"
```

---

### Task 5: Section Avant/Après

**Files:**
- Create: `src/components/sections/before-after.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Créer la section Avant/Après**

`src/components/sections/before-after.tsx`:

- `"use client"`
- Titre "Nos Réalisations" en `font-display`
- Utiliser `ReactCompareSlider` et `ReactCompareSliderImage` de `react-compare-slider`
- 2-3 paires d'images placeholder (avant/après)
- Navigation entre les paires : boutons ou dots en dessous
- `useState` pour l'index de la paire active
- Animation fade-in au scroll

Structure des données (dans le composant) :

```typescript
const comparisons = [
  {
    before: "https://images.unsplash.com/photo-XXXX?w=800", // intérieur voiture basique
    after: "https://images.unsplash.com/photo-YYYY?w=800",  // intérieur voiture avec LED
    label: "LED d'ambiance",
  },
  // ... 2 autres paires
];
```

**Step 2: Intégrer dans page.tsx**

**Step 3: Vérifier visuellement**

Le curseur doit glisser entre avant et après. La navigation entre les exemples doit fonctionner.

**Step 4: Commit**

```bash
git add src/components/sections/before-after.tsx src/app/page.tsx
git commit -m "feat(before-after): ajouter la galerie avant/après avec curseur interactif"
```

---

### Task 6: Section Feed Instagram

**Files:**
- Create: `src/components/sections/instagram-feed.tsx`
- Create: `src/lib/instagram.ts` (helper API)
- Modify: `src/app/page.tsx`
- Modify: `.env.local` (token Instagram)

**Step 1: Créer le helper Instagram**

`src/lib/instagram.ts`:

Fonction `fetchInstagramPosts()` qui appelle l'API Instagram Basic Display :
- Endpoint : `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=TOKEN`
- Retourne les 8 derniers posts (images uniquement, filtrer les vidéos)
- Gestion d'erreur : retourner un tableau vide si l'API échoue

Type :

```typescript
export type InstagramPost = {
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
};
```

**Step 2: Créer la section Instagram**

`src/components/sections/instagram-feed.tsx`:

- Server Component (fetch côté serveur)
- Titre "Suivez-nous sur Instagram" en `font-display`
- Grille : 4 cols desktop, 2 cols mobile
- Chaque post : image avec overlay au hover (icône Instagram), lien vers le post
- Si pas de token configuré ou erreur API : afficher un message de fallback avec lien vers le compte Instagram

**Step 3: Configurer le token (pour plus tard)**

Créer `.env.local` :

```
INSTAGRAM_ACCESS_TOKEN=your_token_here
```

Ajouter `next.config.ts` si besoin pour les domaines d'images Instagram :

```typescript
images: {
  remotePatterns: [
    { hostname: "*.cdninstagram.com" },
    { hostname: "images.unsplash.com" },
  ],
}
```

**Note :** Pour la démo, si le token n'est pas encore disponible, le composant affichera un fallback propre avec des placeholders et un lien vers le compte Instagram.

**Step 4: Intégrer dans page.tsx**

**Step 5: Vérifier**

Avec token → vrais posts. Sans token → fallback propre.

**Step 6: Commit**

```bash
git add src/components/sections/instagram-feed.tsx src/lib/instagram.ts src/app/page.tsx
git commit -m "feat(instagram): ajouter le feed Instagram avec fallback"
```

---

### Task 7: Section Contact / Devis

**Files:**
- Create: `src/components/sections/contact.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Créer la section Contact**

`src/components/sections/contact.tsx`:

- `"use client"` (formulaire interactif)
- `id="contact"`
- Titre "Demandez un devis" en `font-display`
- Layout 2 colonnes desktop : formulaire à gauche, infos contact à droite
- Champs : nom, email, téléphone, type de prestation (select avec les 6 services), message (textarea)
- Bouton "Envoyer" doré
- Pour la démo : le formulaire ne fait rien côté serveur, juste un `alert` ou un message de succès local
- Animations fade-in au scroll

Infos contact à droite :
- Email (placeholder)
- Téléphone (placeholder)
- Instagram
- Localisation (placeholder)

**Step 2: Intégrer dans page.tsx**

**Step 3: Vérifier**

Formulaire responsive, select fonctionne, bouton visible.

**Step 4: Commit**

```bash
git add src/components/sections/contact.tsx src/app/page.tsx
git commit -m "feat(contact): ajouter la section contact et demande de devis"
```

---

### Task 8: Footer

**Files:**
- Create: `src/components/sections/footer.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Créer le Footer**

`src/components/sections/footer.tsx`:

- Fond `dark-lighter` (#1A1A1A)
- 3 colonnes desktop (1 col mobile) : Logo + description | Liens rapides | Contact
- Logo BM_customm (placeholder texte pour l'instant)
- Liens : Accueil, Services, À propos, Contact
- Icône Instagram (lien vers le compte)
- Copyright "© 2026 BM Custom. Tous droits réservés."
- Séparateur doré en haut

**Step 2: Intégrer dans page.tsx**

**Step 3: Commit**

```bash
git add src/components/sections/footer.tsx src/app/page.tsx
git commit -m "feat(footer): ajouter le footer avec liens et copyright"
```

---

### Task 9: Polish et responsive final

**Files:**
- Modify: tous les composants sections
- Modify: `src/app/page.tsx`

**Step 1: Vérifier le responsive sur toutes les sections**

Tester sur mobile (375px), tablette (768px) et desktop (1280px+). Corriger les problèmes de spacing, tailles de texte, grilles.

**Step 2: Vérifier les animations Framer Motion**

S'assurer que toutes les animations au scroll sont fluides et ne causent pas de lag.

**Step 3: Ajouter les séparateurs entre sections**

Si nécessaire, ajouter des séparateurs visuels (lignes dorées, spacing) entre les sections.

**Step 4: Build de production**

```bash
npm run build
npm run lint
```

Corriger les erreurs éventuelles.

**Step 5: Commit final**

```bash
git add .
git commit -m "style: polish responsive et animations finales"
```

---

## Ordre des tâches

```
Task 1 (Setup) → Task 2 (Navbar) → Task 3 (Hero) → Task 4 (Services)
→ Task 5 (Avant/Après) → Task 6 (Instagram) → Task 7 (Contact)
→ Task 8 (Footer) → Task 9 (Polish)
```

Toutes les tâches sont séquentielles car chaque section s'ajoute à la page.
