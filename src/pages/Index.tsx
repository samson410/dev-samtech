import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

const Index = () => {
  return (
    <div id="top" className="page-shell">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
