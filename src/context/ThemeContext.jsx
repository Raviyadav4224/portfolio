import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved === "dark";
  // fall back to OS preference on first-ever visit
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

// Redux used to own a single boolean (isDark) here. For one piece of state
// that only this component tree cares about, React Context + useState is
// simpler than wiring up a store/reducer/actions for it — Redux earns its
// keep with larger, cross-cutting app state, not a light/dark flag.
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    // Tailwind's darkMode: "class" strategy reads this class on <html>
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
