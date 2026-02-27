# Design — Page d'accueil BM_customm

## Contexte

Client : BM_customm (Velat BINGOL) — Custom automobile depuis 4 ans.
Objectif : Créer la page d'accueil du futur site e-commerce pour montrer au client un résultat concret et le convaincre.

## Stack

- Next.js (App Router) + TypeScript strict
- Tailwind CSS (mobile-first)
- Framer Motion (animations au scroll)
- react-compare-slider (galerie avant/après)
- API Instagram Basic Display (feed réel)

## Charte graphique

- Fond : noir (#000 / #0A0A0A)
- Accent : doré (#D4AF37)
- Texte : blanc (#FFFFFF)
- Logo : fourni par le client
- Typographie : moderne, épurée

## Sections de la page

### 1. Navbar
- Logo BM_customm à gauche
- Liens : Accueil, Services, Boutique, À propos, Contact
- Icône panier à droite
- Fixe au scroll, fond transparent → noir au scroll
- Menu hamburger sur mobile

### 2. Hero
- Plein écran (100vh)
- Image de fond placeholder (voiture customisée)
- Titre accrocheur + sous-titre
- Bouton CTA "Découvrir nos services"
- Animation d'entrée Framer Motion (fade-in + slide-up)

### 3. Services
- Grille de 6 cartes (3x2 desktop, 2x3 tablette, 1x6 mobile)
- Prestations : LED d'ambiance, Ciel étoilé, CarPlay, Nettoyage, Polissage, Jantes
- Chaque carte : image placeholder, titre, description courte
- Animation fade-in au scroll

### 4. Avant/Après
- Section star du site
- Composant react-compare-slider
- 2-3 exemples de transformations (images placeholder)
- Navigation entre les exemples (flèches ou dots)

### 5. Feed Instagram
- Vrai widget connecté à l'API Instagram Basic Display
- Grille de posts (6-8 posts)
- Clic sur un post → redirige vers Instagram
- Scroll horizontal sur mobile

### 6. Contact / Devis
- Formulaire : nom, email, téléphone, type de prestation (select), message
- Bouton "Demander un devis"
- Fonctionnel (envoi email ou juste UI pour la démo)

### 7. Footer
- Logo BM_customm
- Liens rapides (services, contact, mentions légales)
- Icônes réseaux sociaux (Instagram)
- Copyright

## Design global

- Animations sobres au scroll (Framer Motion)
- Responsive mobile-first
- Images placeholder Unsplash en attendant les vraies photos
- Performance : next/image, lazy loading
