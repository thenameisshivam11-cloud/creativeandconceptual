import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Manifesto } from './components/Manifesto';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThreeCanvas } from './components/ThreeCanvas';
import { CustomCursor } from './components/CustomCursor';
import { FounderModal } from './components/FounderModal';

export default function App() {
  const [founderModalOpen, setFounderModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Web Design & Development');
  const [threeMode, setThreeMode] = useState<'ambient' | 'wireframe' | 'refraction'>('ambient');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-neutral-100 font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* 3D Background Stage */}
      <ThreeCanvas
        interactiveMode={threeMode}
        onModeChange={(mode) => setThreeMode(mode)}
      />

      {/* Custom Trailing Glow Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onGetInTouch={() => scrollToSection('contact')}
          onOpenFounderModal={() => setFounderModalOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* What We Do / Services Section */}
        <Services
          onSelectServiceForInquiry={(serviceTitle) => {
            setSelectedServiceForInquiry(serviceTitle);
            scrollToSection('contact');
          }}
        />

        {/* Selected Work / Portfolio Section */}
        <Portfolio />

        {/* Studio Philosophy / Anti-Template Manifesto */}
        <Manifesto />

        {/* Direct Contact & Commission Request */}
        <Contact preselectedService={selectedServiceForInquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Founder Profile Modal */}
      <FounderModal
        isOpen={founderModalOpen}
        onClose={() => setFounderModalOpen(false)}
        onOpenContact={() => scrollToSection('contact')}
      />
    </div>
  );
}
