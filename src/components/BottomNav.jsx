import {
  Home,
  User,
  FolderOpen,
  GraduationCap,
  Github,
  Linkedin,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import siteConfig from "../config/site.config.js";

const navIcons = {
  hero: Home,
  about: User,
  projects: FolderOpen,
  work: GraduationCap,
};

const BottomNav = () => {
  const { isDark, toggleTheme } = useTheme();

  // Only show the internal-page links here; "Contact" stays reachable via
  // the desktop nav / scroll, keeping the mobile bar from getting cramped.
  const links = siteConfig.nav.filter((item) => navIcons[item.path]);

  return (
    <div
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center
        gap-1 rounded-full border border-accent-blue/20 bg-surface-light/80
        dark:bg-surface-dark/80 px-3 py-2 shadow-lg backdrop-blur-md md:hidden"
    >
      {links.map((item) => {
        const Icon = navIcons[item.path];
        return (
          <a
            key={item.path}
            href={`#${item.path}`}
            aria-label={item.title}
            className="rounded-full p-2.5 text-muted-light dark:text-muted-dark
              transition-colors hover:bg-accent-blue/10 hover:text-accent-blue"
          >
            <Icon size={18} />
          </a>
        );
      })}

      <span className="mx-1 h-5 w-px bg-accent-blue/20" />

      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="rounded-full p-2.5 text-muted-light dark:text-muted-dark
          transition-colors hover:bg-accent-blue/10 hover:text-accent-blue"
      >
        <Github size={18} />
      </a>
      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="rounded-full p-2.5 text-muted-light dark:text-muted-dark
          transition-colors hover:bg-accent-blue/10 hover:text-accent-blue"
      >
        <Linkedin size={18} />
      </a>

      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="rounded-full p-2.5 text-muted-light dark:text-muted-dark
          transition-colors hover:bg-accent-blue/10 hover:text-accent-amber"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
};

export default BottomNav;
