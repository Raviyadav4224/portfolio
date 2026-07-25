import { Mail, MapPin, Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { sendEmail } from "../utils/sendEmail.js";
import siteConfig from "../config/site.config.js";

const inputStyles =
  "w-full rounded-md border border-accent-blue/20 bg-surface-light dark:bg-surface-dark " +
  "px-4 py-3 font-body text-sm text-ink dark:text-white placeholder:text-muted-light " +
  "dark:placeholder:text-muted-dark focus:border-accent-blue focus:outline-none " +
  "focus:ring-2 focus:ring-accent-blue/20 transition-colors";

const Contact = () => {
  const { isDark } = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(event.target, isDark);
    event.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-blueprint-grid px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <p className="section-label">// contact</p>
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Contact Me
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              maxLength={30}
              required
              className={inputStyles}
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              maxLength={30}
              required
              className={inputStyles}
            />
            <textarea
              rows={6}
              placeholder="Message"
              name="message"
              maxLength={500}
              required
              className={inputStyles}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-accent-blue
                px-6 py-3 font-mono text-sm font-medium text-white transition-transform
                hover:scale-[1.02] hover:bg-accent-blue/90 active:scale-95"
            >
              <Send size={15} />
              Let's Connect
            </button>
          </form>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-accent-blue/15
              bg-surface-light dark:bg-surface-dark p-4">
              <MapPin className="mt-0.5 shrink-0 text-accent-blue" size={20} />
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted-light dark:text-muted-dark">
                  Address
                </p>
                <p className="mt-1 font-body text-sm font-medium text-ink dark:text-white">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-accent-blue/15
              bg-surface-light dark:bg-surface-dark p-4">
              <Mail className="mt-0.5 shrink-0 text-accent-blue" size={20} />
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted-light dark:text-muted-dark">
                  Email
                </p>
                <p className="mt-1 font-body text-sm font-medium text-ink dark:text-white">
                  {siteConfig.contact.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
