import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
};

export default HomePage;
