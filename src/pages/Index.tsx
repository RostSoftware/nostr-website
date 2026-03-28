import { useSeoMeta } from '@unhead/react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  useSeoMeta({
    title: 'Rost Software & Media | Open Source Software für Nostr',
    description: 'Wir entwickeln und hosten Open-Source-Software für das dezentrale Web. Spezialisiert auf Nostr und zukunftsweisende Protokolle.',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
