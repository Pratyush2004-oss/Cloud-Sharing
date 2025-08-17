import CTASecction from "../components/Landing/CTASecction";
import FeatureSection from "../components/Landing/FeatureSection";
import FooterSection from "../components/Landing/FooterSection";
import HeroSection from "../components/Landing/HeroSection";
import PricingSection from "../components/Landing/PricingSection";

const Landing = () => {
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100 ">
      {/* Hero section */}
      <HeroSection />

      {/* Features section */}
      <FeatureSection />

      {/* Pricing section */}
      <PricingSection />

      {/* CTA section */}
      <CTASecction />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Landing;
