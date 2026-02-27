import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";
import { Shop } from "@/components/sections/shop";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <Shop />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
