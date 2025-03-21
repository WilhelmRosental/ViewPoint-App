"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

// Types
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQCategory {
  id: string;
  name: string;
  description: string;
}

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Sample FAQ data
  const faqCategories: FAQCategory[] = [
    {
      id: "general",
      name: "Général",
      description: "Questions générales sur notre plateforme",
    },
    {
      id: "photographers",
      name: "Photographes",
      description: "Questions concernant les photographes et leurs services",
    },
    {
      id: "clients",
      name: "Clients",
      description: "Questions pour les clients qui cherchent des photographes",
    },
    {
      id: "bookings",
      name: "Réservations",
      description: "Questions sur le processus de réservation",
    },
    {
      id: "payments",
      name: "Paiements",
      description: "Questions sur les paiements et la facturation",
    },
    {
      id: "account",
      name: "Compte",
      description: "Questions sur la gestion de votre compte",
    },
  ];

  const faqItems: FAQItem[] = [
    {
      id: "q1",
      question: "Comment fonctionne la plateforme ?",
      answer:
        "Notre plateforme met en relation des photographes professionnels avec des clients à la recherche de services photographiques. Les clients peuvent parcourir les profils des photographes, voir leurs portfolios, et réserver directement leurs services. Les photographes peuvent créer des profils détaillés, présenter leur travail et gérer leurs réservations.",
      category: "general",
    },
    {
      id: "q2",
      question: "Est-ce que l'inscription est gratuite ?",
      answer:
        "Oui, l'inscription sur notre plateforme est totalement gratuite pour les clients et les photographes. Nous prélevons uniquement une petite commission sur les réservations complétées.",
      category: "general",
    },
    {
      id: "q3",
      question: "Comment puis-je contacter le support client ?",
      answer:
        "Vous pouvez contacter notre équipe de support client par email à support@photofinder.com ou via le formulaire de contact disponible sur notre site. Nous répondons généralement dans les 24 heures ouvrables.",
      category: "general",
    },
    {
      id: "q4",
      question: "Comment devenir photographe sur la plateforme ?",
      answer:
        "Pour devenir photographe sur notre plateforme, vous devez créer un compte, compléter votre profil professionnel avec vos informations et votre portfolio, puis soumettre votre profil pour vérification. Une fois approuvé, votre profil sera visible pour les clients potentiels.",
      category: "photographers",
    },
    {
      id: "q5",
      question: "Quels types de photographie puis-je proposer ?",
      answer:
        "Vous pouvez proposer tous types de services photographiques : mariage, portrait, événementiel, immobilier, produit, etc. Vous définissez vos spécialités et vos tarifs dans votre profil.",
      category: "photographers",
    },
    {
      id: "q6",
      question: "Comment sont calculées les commissions ?",
      answer:
        "Nous prélevons une commission de 10% sur chaque réservation complétée. Cette commission couvre les frais de traitement des paiements, la maintenance de la plateforme et le support client.",
      category: "photographers",
    },
    {
      id: "q7",
      question: "Comment trouver le bon photographe pour mon projet ?",
      answer:
        "Vous pouvez rechercher des photographes en fonction de leur localisation, leur spécialité, leur tarif et leurs disponibilités. Consultez leurs portfolios et leurs avis pour faire votre choix. Vous pouvez également contacter plusieurs photographes pour discuter de votre projet avant de prendre une décision.",
      category: "clients",
    },
    {
      id: "q8",
      question: "Puis-je annuler une réservation ?",
      answer:
        "Oui, vous pouvez annuler une réservation, mais les conditions d'annulation dépendent de la politique du photographe et du délai avant la prestation. Certains photographes peuvent appliquer des frais d'annulation, surtout pour les annulations de dernière minute.",
      category: "clients",
    },
    {
      id: "q9",
      question: "Comment fonctionne le processus de réservation ?",
      answer:
        "Pour réserver un photographe, sélectionnez son profil, choisissez une date et une heure disponibles, précisez vos besoins, puis procédez au paiement d'un acompte pour confirmer la réservation. Le photographe recevra une notification et pourra accepter ou refuser la demande.",
      category: "bookings",
    },
    {
      id: "q10",
      question: "Puis-je modifier la date de ma réservation ?",
      answer:
        "Oui, vous pouvez demander une modification de date, sous réserve de la disponibilité du photographe. Contactez directement le photographe via notre messagerie pour discuter des changements possibles.",
      category: "bookings",
    },
    {
      id: "q11",
      question: "Quels modes de paiement acceptez-vous ?",
      answer:
        "Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, et les virements bancaires dans certains pays. Tous les paiements sont sécurisés et cryptés.",
      category: "payments",
    },
    {
      id: "q12",
      question: "Quand les photographes sont-ils payés ?",
      answer:
        "Les photographes reçoivent leur paiement 7 jours après la réalisation de la prestation, une fois que le client a confirmé sa satisfaction. Cela permet de gérer d'éventuelles réclamations et d'assurer la qualité du service.",
      category: "payments",
    },
    {
      id: "q13",
      question: "Comment modifier mes informations personnelles ?",
      answer:
        'Vous pouvez modifier vos informations personnelles dans la section "Paramètres" de votre compte. Vous y trouverez des options pour mettre à jour votre profil, vos coordonnées et vos préférences de notification.',
      category: "account",
    },
    {
      id: "q14",
      question: "Comment supprimer mon compte ?",
      answer:
        'Pour supprimer votre compte, rendez-vous dans la section "Paramètres", puis "Confidentialité", et cliquez sur "Supprimer mon compte". Veuillez noter que cette action est irréversible et que toutes vos données seront définitivement supprimées.',
      category: "account",
    },
  ];

  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Filter FAQs based on search query and active category
  useEffect(() => {
    let filtered = faqItems;

    if (searchQuery) {
      filtered = faqItems.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeCategory !== "all") {
      filtered = faqItems.filter((item) => item.category === activeCategory);
    }

    setFilteredFAQs(filtered);
  }, [searchQuery, activeCategory]);

  // Toggle FAQ item open/closed
  const toggleQuestion = (id: string) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Comment pouvons-nous vous aider ?
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
          Trouvez rapidement des réponses à vos questions sur notre plateforme
          de photographie
        </p>

        {/* Search bar */}
        <div className="max-w-xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pl-12 rounded-full border-none shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Catégories
              </h2>
              <ul className="space-y-2">
                {faqCategories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                        activeCategory === category.id
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                      activeCategory === "all"
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Toutes les questions
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ content */}
          <div className="md:w-3/4">
            {searchQuery ? (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Résultats de recherche
                </h2>
                <p className="text-gray-600">
                  {filteredFAQs.length} résultat(s) pour "{searchQuery}"
                </p>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {activeCategory === "all"
                    ? "Toutes les questions"
                    : faqCategories.find((c) => c.id === activeCategory)
                        ?.name || ""}
                </h2>
                <p className="text-gray-600">
                  {activeCategory === "all"
                    ? "Toutes les questions fréquemment posées"
                    : faqCategories.find((c) => c.id === activeCategory)
                        ?.description || ""}
                </p>
              </div>
            )}

            {filteredFAQs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-gray-600 mb-4">
                  Nous n'avons pas trouvé de réponse correspondant à votre
                  recherche.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("general");
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Réinitialiser la recherche
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full text-left p-6 focus:outline-none"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-800">
                          {item.question}
                        </h3>
                        <span
                          className={`transform transition-transform duration-200 ${
                            openQuestions.includes(item.id) ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-500"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </div>
                    </button>

                    {openQuestions.includes(item.id) && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Contact section */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Vous n'avez pas trouvé ce que vous cherchiez ?
              </h2>
              <p className="text-gray-600 mb-6">
                Notre équipe de support est disponible pour répondre à toutes
                vos questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Contacter le support
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Consulter le guide d'utilisation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
