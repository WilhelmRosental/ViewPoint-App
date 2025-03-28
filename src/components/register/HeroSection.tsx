"use client";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Développez votre activité de photographe avec ViewPoint
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Rejoignez notre communauté de photographes professionnels et trouvez
            de nouveaux clients pour vos projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#registration-form"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white transition-colors duration-200"
            >
              S&apos;inscrire maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white transition-colors duration-200"
            >
              Comment ça marche
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
