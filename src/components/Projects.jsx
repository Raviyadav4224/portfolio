import { ExternalLink } from "lucide-react";
import siteConfig from "../config/site.config.js";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-12">
      <p className="section-label">// projects</p>
      <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
        My Projects
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-lg border border-accent-blue/15
              bg-surface-light dark:bg-surface-dark transition-all
              hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-lg"
          >
            {/* file-tab style title bar to keep the "code editor" motif */}
            <div className="flex items-center gap-1.5 border-b border-accent-blue/10 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-accent-amber/70" />
              <span className="h-2 w-2 rounded-full bg-accent-blue/50" />
              <span className="ml-2 truncate font-mono text-xs text-muted-light dark:text-muted-dark">
                {project.title.toLowerCase().replace(/\s+/g, "-")}.jsx
              </span>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="flex items-center justify-between font-display font-semibold text-ink dark:text-white">
                {project.title}
                <ExternalLink
                  size={15}
                  className="text-muted-light dark:text-muted-dark transition-colors group-hover:text-accent-blue"
                />
              </h3>
              <p className="mt-1 font-body text-sm text-muted-light dark:text-muted-dark">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
