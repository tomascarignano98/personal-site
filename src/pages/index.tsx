import React from 'react';

import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SEO from '@/components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO title="Tomas Carignano" />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
