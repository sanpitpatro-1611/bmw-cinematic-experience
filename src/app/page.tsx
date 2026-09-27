import React from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import WorldSection from "@/components/world/WorldSection";
import CollectionSection from "@/components/collection/CollectionSection";
import ModelExperienceSection from "@/components/model/ModelExperienceSection";
import PerformanceSection from "@/components/performance/PerformanceSection";
import EngineeringSection from "@/components/engineering/EngineeringSection";
import ConfiguratorSection from "@/components/configurator/ConfiguratorSection";
import ComparisonSection from "@/components/compare/ComparisonSection";
import FindBMWSection from "@/components/find/FindBMWSection";
import TestDriveSection from "@/components/test-drive/TestDriveSection";
import DealerLocatorSection from "@/components/dealer/DealerLocatorSection";
import FooterSection from "@/components/footer/FooterSection";

export default function HomePage() {
  return (
    <main className="relative bg-[#050505] text-[#F5F5F5] min-h-screen">
      {/* Minimal Floating Luxury Navigation */}
      <Navbar />

      {/* 1. Hero Section: The Reveal (Frame-Sequence Scroll Story) */}
      <HeroSection />

      {/* 2. Brand Narrative: The BMW World */}
      <WorldSection />

      {/* 3. Editorial Presentation: The Collection */}
      <CollectionSection />

      {/* 4. Deep Vehicle Exploration: Model Experience (5 Chapters) */}
      <ModelExperienceSection />

      {/* 5. Pure Racing Dynamics: BMW M Performance */}
      <PerformanceSection />

      {/* 6. Precision Architecture: Engineering Mastery */}
      <EngineeringSection />

      {/* 7. Bespoke Customization: Configure Your BMW */}
      <ConfiguratorSection />

      {/* 8. Head-to-Head Matrix: Vehicle Comparison */}
      <ComparisonSection />

      {/* 9. Guided Discovery: Find Your BMW */}
      <FindBMWSection />

      {/* 10. Private Pilot Booking: Experience It (Test Drive) */}
      <TestDriveSection />

      {/* 11. Official Network: Find a Dealer */}
      <DealerLocatorSection />

      {/* 12. Editorial Closing: The Journey Continues */}
      <FooterSection />
    </main>
  );
}
