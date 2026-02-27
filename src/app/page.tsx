import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";
import { Shop } from "@/components/sections/shop";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { TireTrackDivider } from "@/components/ui/tire-track-divider";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TireTrackDivider className="bg-dark" />
      <About />
      <Services />
      <TireTrackDivider className="bg-dark" />
      <BeforeAfter />
      <Shop />
      <TireTrackDivider className="bg-dark-lighter" />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
