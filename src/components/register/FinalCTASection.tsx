import React from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="bg-teal-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
          Prêt à développer votre activité ?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Rejoignez des milliers de photographes qui ont déjà transformé leur
          passion en activité florissante grâce à ViewPoint.
        </p>
        <a
          href="#registration-form"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white transition-colors duration-200"
        >
          Commencer maintenant
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
