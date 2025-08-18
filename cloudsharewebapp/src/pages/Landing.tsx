import { useUser } from "@clerk/clerk-react";
import CTASecction from "../components/Landing/CTASecction";
import FeatureSection from "../components/Landing/FeatureSection";
import FooterSection from "../components/Landing/FooterSection";
import HeroSection from "../components/Landing/HeroSection";
import PricingSection from "../components/Landing/PricingSection";
import Testimonials from "../components/Landing/Testimonials";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn]);
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100 ">
      {/* Hero section */}
      <HeroSection />

      {/* Features section */}
      <FeatureSection />

      {/* Pricing section */}
      <PricingSection />

      {/* testimonials */}
      <Testimonials />

      {/* CTA section */}
      <CTASecction />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Landing;
