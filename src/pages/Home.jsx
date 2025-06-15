import {StarBackground} from "../components/StarBackground"
import {NavBar} from "../components/NavBar"

export const Home = () => {
  return (

  <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
    
      {/* bg effects */}
      <StarBackground />

      {/* nav bar */}
      <NavBar />
      {/* main content */}
      {/* footer */}
  </div>

  );
};