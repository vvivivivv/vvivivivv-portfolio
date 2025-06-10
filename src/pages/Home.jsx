import {ThemeToggle} from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground"

export const Home = () => {
  return (
  <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
      {/* theme toggle (light/dark mode) */}
      <ThemeToggle />
  
      {/* bg effects */}
      <StarBackground />
      {/* nav bar */}
      {/* main content */}
      {/* footer */}
  </div>

  );
};