import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/Skills";

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
      </main>
      {/* footer */}
  </div>

  );
};