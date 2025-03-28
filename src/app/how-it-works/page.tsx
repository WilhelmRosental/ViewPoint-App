"use client";

import { useState } from "react";
import HeaderSection from "../../components/how-it-works/HeaderSection";
import TabNavigation from "../../components/how-it-works/TabNavigation";
import ClientsSection from "../../components/how-it-works/ClientsSection";
import PhotographersSection from "../../components/how-it-works/PhotographersSection";
import FAQSection from "../../components/how-it-works/FAQSection";

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<"clients" | "photographers">(
    "clients"
  );
  const [openFAQs, setOpenFAQs] = useState<number[]>([0]); // premier élément ouvert par défaut

  const toggleFAQ = (index: number) => {
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter((item) => item !== index));
    } else {
      setOpenFAQs([...openFAQs, index]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "clients" ? (
            <ClientsSection />
          ) : (
            <PhotographersSection />
          )}
          {/* ...other sections (Garanties, Testimonials, CTA, Support, etc.) */}
          <FAQSection openFAQs={openFAQs} toggleFAQ={toggleFAQ} />
        </div>
      </section>
      {/* Footer would go here */}
    </div>
  );
}
