"use client";

import { services } from "@/lib/data";
import { ServiceCard } from "@/components/ui/service-card";

export const Services = () => {
  return (
    <section
      id="services"
      className="bg-dark px-4 py-20 md:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Titre de section */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Nos <span className="text-gold">Services</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
