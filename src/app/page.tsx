"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <LoadingScreen onDone={() => setShowLoader(false)} />}
      <CustomCursor />
      <Navbar onContactClick={() => setContactOpen(true)} />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32">
        <HeroSection onContactClick={() => setContactOpen(true)} />
        <MarqueeStrip />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
      </main>

      <Footer />

      {contactOpen && (
        <ContactModal onClose={() => setContactOpen(false)} />
      )}
    </>
  );
}
