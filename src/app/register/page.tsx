"use client";

import HeroSection from "../../components/register/HeroSection";
import StatsSection from "../../components/register/StatsSection";
import BenefitsSection from "../../components/register/BenefitsSection";
import HowItWorksSection from "../../components/register/HowItWorksSection";
import TestimonialsSection from "../../components/register/TestimonialsSection";
import FAQSection from "../../components/register/FAQSection";
import RegistrationFormSection from "../../components/register/RegistrationFormSection";
import FinalCTASection from "../../components/register/FinalCTASection";
import SupportSection from "../../components/register/SupportSection";

export default function BecomePhotographerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <RegistrationFormSection />
      <FinalCTASection />
      <SupportSection />
    </div>
  );
}
