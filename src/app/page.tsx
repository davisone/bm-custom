import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
    </main>
  );
};

export default HomePage;
