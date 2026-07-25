import { Github, Instagram, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import siteConfig from "../config/site.config.js";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between
        border-b border-accent-blue/15 bg-paper/80 dark:bg-blueprint-bg/80
        backdrop-blur-md px-4 sm:px-8 py-3"
    >
      {/* Left: nav items rendered like open editor tabs */}
      <div className="hidden md:flex items-center gap-1">
        {siteConfig.nav.map((item, index) => (
          <a
            key={item.path}
            href={`#${item.path}`}
            className={`group flex items-center gap-2 rounded-t-md px-3 py-1.5
              font-mono text-sm transition-colors
              ${
                index === 0
                  ? "text-ink dark:text-white font-semibold"
                  : "text-muted-light dark:text-muted-dark hover:text-accent-blue"
              }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                index === 0 ? "bg-accent-amber" : "bg-accent-blue/50 group-hover:bg-accent-blue"
              }`}
            />
            {item.title}
          </a>
        ))}
      </div>

      {/* Mobile: just the wordmark, full nav lives in BottomNav */}
      <a
        href="#hero"
        className="md:hidden font-mono text-sm font-semibold text-ink dark:text-white"
      >
        {siteConfig.meta.shortHandle}
      </a>

      <div className="flex items-center gap-4">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted-light dark:text-muted-dark hover:text-accent-blue transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href={siteConfig.socials.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-muted-light dark:text-muted-dark hover:text-accent-blue transition-colors"
        >
          <Instagram size={18} />
        </a>
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-muted-light dark:text-muted-dark hover:text-accent-blue transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="rounded-full border border-accent-blue/20 p-1.5
            text-muted-light dark:text-muted-dark hover:text-accent-amber
            hover:border-accent-amber/40 transition-colors"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
