import siteConfig from "../config/site.config.js";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-6 py-24 sm:px-12"
    >
      <p className="section-label">// about</p>
      <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
        Get to know me
      </h2>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        {/* Left: narrative + quick facts */}
        <div>
          <p className="font-body leading-relaxed text-muted-light dark:text-muted-dark">
            {siteConfig.about.intro}
          </p>
          <p className="mt-4 font-body leading-relaxed text-muted-light dark:text-muted-dark">
            {siteConfig.about.focus}
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {siteConfig.about.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-accent-blue/15 bg-surface-light
                  dark:bg-surface-dark px-4 py-3"
              >
                <dt className="font-mono text-xs uppercase tracking-wide text-accent-blue">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-body text-sm text-ink dark:text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: skills, grouped like config sections */}
        <div className="space-y-6">
          {siteConfig.skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent-amber">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-accent-blue/20 bg-accent-blue/5
                      px-3 py-1 font-mono text-xs text-ink dark:text-slate-200
                      dark:bg-accent-blue/10 transition-colors hover:border-accent-blue/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
