import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { BeforeAfter } from "@/components/sections/before-after";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { GoogleReviews } from "@/components/sections/google-reviews";
import { CtaDevis } from "@/components/sections/cta-devis";
import { Footer } from "@/components/sections/footer";
import { TireTrackDivider } from "@/components/ui/tire-track-divider";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TireTrackDivider className="bg-dark" />
      <ServicesPreview />
      <TireTrackDivider className="bg-dark" />
      <BeforeAfter />
      <InstagramFeed />
      <GoogleReviews />
      <CtaDevis />
      <Footer />
    </main>
  );
};

export default HomePage;
