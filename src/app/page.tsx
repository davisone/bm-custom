import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Contact } from "@/components/sections/contact";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <InstagramFeed />
      <Contact />
    </main>
  );
};

export default HomePage;
