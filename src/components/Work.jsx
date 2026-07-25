import { Briefcase, GraduationCap } from "lucide-react";
import siteConfig from "../config/site.config.js";

const Work = () => {
  return (
    <section
      id="work"
      className="bg-blueprint-grid px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-3xl">
        <p className="section-label">// work &amp; education</p>
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Work &amp; Education
        </h2>

        <ol className="mt-12 border-l-2 border-accent-blue/25 pl-8">
          {siteConfig.timeline.map((item, index) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap;
            return (
              <li key={index} className="relative mb-10 last:mb-0">
                <span
                  className="absolute -left-[41px] flex h-7 w-7 items-center justify-center
                    rounded-full border-2 border-accent-blue bg-paper dark:bg-blueprint-bg
                    text-accent-blue"
                >
                  <Icon size={14} />
                </span>
                <span className="font-mono text-xs text-accent-amber">
                  {item.year}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-muted-light dark:text-muted-dark">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Work;
