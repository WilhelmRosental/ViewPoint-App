"use client";

import type React from "react";
import { useState, useEffect } from "react";
import FAQSearch from "../../components/faq/FAQSearch";
import FAQSidebar from "../../components/faq/FAQSidebar";
import FAQContent from "../../components/faq/FAQContent";

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const toggleQuestion = (id: string) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery("");
  };

  const handleReset = () => {
    setSearchQuery("");
    setActiveCategory("general");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FAQSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <FAQSidebar
              faqCategories={faqCategories}
              activeCategory={activeCategory}
              handleCategoryChange={handleCategoryChange}
            />
          </div>
          <div className="md:w-3/4">
            <FAQContent
              filteredFAQs={filteredFAQs}
              searchQuery={searchQuery}
              activeCategory={activeCategory}
              faqCategories={faqCategories}
              openQuestions={openQuestions}
              toggleQuestion={toggleQuestion}
              handleReset={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
