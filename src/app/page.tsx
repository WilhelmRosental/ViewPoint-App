import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedPhotographers from "@/components/home/FeaturedPhotographers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedPhotographers />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
