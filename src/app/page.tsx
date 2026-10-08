import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { WhatIDoSection } from '@/components/sections/what-i-do/WhatIDoSection';
import { StackSection } from '@/components/sections/stack/StackSection';
import { ArchitectureFlowSection } from '@/components/sections/architecture/ArchitectureFlowSection';
import { EnterpriseIntegrationSection } from '@/components/sections/integration/EnterpriseIntegrationSection';
import { LeadershipSection } from '@/components/sections/leadership/LeadershipSection';
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection';
import { FivePillarsSection } from '@/components/sections/pillars/FivePillarsSection';
import { ContactSection } from '@/components/sections/contact/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhatIDoSection />
        <StackSection />
        <ArchitectureFlowSection />
        <EnterpriseIntegrationSection />
        <LeadershipSection />
        <ProjectsSection />
        <FivePillarsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
