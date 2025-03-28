"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface FAQSectionProps {
  openFAQs: number[];
  toggleFAQ: (index: number) => void;
}

export default function FAQSection({ openFAQs, toggleFAQ }: FAQSectionProps) {
  const faqs = [
    {
      question: "Combien coûte l'utilisation de la plateforme ?",
      answer:
        "L'inscription et la publication de projets sont entièrement gratuites. PixelPro prélève une commission de 10% sur le montant des projets réalisés via la plateforme. Cette commission couvre les frais de transaction, la garantie satisfaction et le support client.",
    },
    // ...autres FAQ...
    {
      question: "Quels types de projets peut-on publier ?",
      answer:
        "Vous pouvez publier tous types de projets photographiques : mariages, portraits, événements d'entreprise, shootings produits, photos immobilières, mode, etc. Notre plateforme couvre l'ensemble des besoins en photographie professionnelle, pour les particuliers comme pour les entreprises.",
    },
  ];

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Questions fréquentes
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              {openFAQs.includes(index) ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <div
              className={`px-6 py-4 bg-gray-50 border-t border-gray-200 transition-all duration-300 ${
                openFAQs.includes(index) ? "block" : "hidden"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/faq"
          className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
        >
          Voir toutes les questions fréquentes
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
