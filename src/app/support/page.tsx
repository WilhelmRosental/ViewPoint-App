"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Icons
import { Mail } from "lucide-react";

// Import des nouveaux composants
import Header from "../../components/support/Header";
import HelpCenter from "../../components/support/HelpCenter";
import TicketsSection from "../../components/support/TicketsSection";
import ContactSection from "../../components/support/ContactSection";

// Import types et datas depuis les nouveaux fichiers
import type {
  SupportCategory,
  SupportTicket,
  SupportArticle,
} from "./supportTypes";
import {
  supportCategories,
  recentTickets,
  popularArticles,
} from "./supportData";

const SupportPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"help" | "tickets" | "contact">(
    "help"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === "help"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("help")}
          >
            Centre d'aide
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === "tickets"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("tickets")}
          >
            Mes tickets
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === "contact"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Nous contacter
          </button>
        </div>
        {activeTab === "help" && (
          <HelpCenter
            supportCategories={supportCategories}
            popularArticles={popularArticles}
            router={router}
          />
        )}
        {activeTab === "tickets" && (
          <TicketsSection
            router={router}
            onCreateTicket={() => setActiveTab("contact")}
          />
        )}
        {activeTab === "contact" && <ContactSection />}
      </div>
      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
