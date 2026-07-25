import { Download } from "lucide-react";
import siteConfig from "../config/site.config.js";

const Home = () => {
  return (
    <section
      id="hero"
      className="bg-blueprint-grid relative flex min-h-screen flex-col-reverse
        items-center justify-center gap-10 px-6 py-24 sm:px-12 md:flex-row md:gap-16"
    >
      <div className="max-w-xl text-center md:text-left">
        <p className="section-label">// {siteConfig.meta.shortHandle}</p>
        <h1 className="font-display text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
          {siteConfig.hero.titleLines.map((word, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>
        <p className="mt-5 font-body text-base leading-relaxed text-muted-light dark:text-muted-dark sm:text-lg">
          {siteConfig.hero.description}
        </p>
        <a
          href={siteConfig.resumeLink}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent-blue
            px-6 py-3 font-mono text-sm font-medium text-white transition-transform
            hover:scale-[1.03] hover:bg-accent-blue/90 active:scale-95"
        >
          <Download size={16} />
          Resume
        </a>
      </div>

      <div className="relative shrink-0">
        <div
          className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl
            border-2 border-dashed border-accent-blue/40"
          aria-hidden="true"
        />
        <img
          src={siteConfig.profileImage}
          alt={siteConfig.meta.name}
          className="h-56 w-56 rounded-2xl object-cover shadow-xl sm:h-72 sm:w-72"
        />
      </div>
    </section>
  );
};

export default Home;
