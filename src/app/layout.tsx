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
