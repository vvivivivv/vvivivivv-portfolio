import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (

  <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
    
      {/* bg effects */}
      <StarBackground />

      {/* nav bar */}
      <NavBar />
      {/* main content */}
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* footer */}
      <Footer />
  </div>

  );
};