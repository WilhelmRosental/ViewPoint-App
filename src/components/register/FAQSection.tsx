import React, { useState } from "react";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const FAQs = [
  {
    question: "Combien coûte l'inscription sur PixelPro ?",
    answer:
      "L'inscription sur PixelPro est entièrement gratuite pour les photographes. Nous prélevons uniquement une commission de 10% sur les projets réalisés via notre plateforme. Cette commission couvre les frais de transaction, la garantie satisfaction et le support client.",
  },
  {
    question: "Comment sont sélectionnés les photographes ?",
    answer:
      "Tous les photographes passent par un processus de vérification qui inclut la validation de leur identité, de leurs compétences et de leur expérience professionnelle. Nous vérifions également la qualité de votre portfolio. Ce processus nous permet de maintenir un haut niveau de qualité sur notre plateforme.",
  },
  {
    question: "Quand et comment suis-je payé pour mes prestations ?",
    answer:
      "Le client effectue le paiement sur notre plateforme avant la prestation. Les fonds sont conservés en sécurité et vous sont versés 7 jours après la livraison des photos, une fois que le client a confirmé sa satisfaction. Les paiements sont effectués directement sur votre compte bancaire.",
  },
  {
    question: "Puis-je définir mes propres tarifs ?",
    answer:
      "Absolument ! Vous avez un contrôle total sur vos tarifs. Vous pouvez définir différents tarifs selon le type de prestation, la durée, ou d'autres critères. Vous pouvez également ajuster vos tarifs à tout moment depuis votre tableau de bord.",
  },
  {
    question: "Comment gérer mon emploi du temps sur la plateforme ?",
    answer:
      "PixelPro vous offre un calendrier intégré que vous pouvez synchroniser avec votre agenda personnel. Vous pouvez bloquer les dates où vous n'êtes pas disponible et gérer vos rendez-vous directement depuis la plateforme. Cela vous permet d'éviter les doubles réservations.",
  },
];

export default function FAQSection() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir avant de rejoindre notre communauté de
            photographes.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQs.map((faq, index) => (
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
    </section>
  );
}
