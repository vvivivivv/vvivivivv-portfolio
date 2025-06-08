import {ThemeToggle} from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* theme toggle (light/dark mode) */}
      <ThemeToggle />
      <div className="p-8">
        <h1 className="text-4xl font-bold">Test Page</h1>
        <p>Look for the button in the top-right corner</p>
      </div>
      {/* bg effects */}
      {/* nav bar */}
      {/* main content */}
      {/* footer */}
    </div>
  );
};