import siteConfig from "../config/site.config.js";

const Footer = () => {
  return (
    <footer
      className="border-t border-accent-blue/15 px-6 py-8 text-center
        font-mono text-xs text-muted-light dark:text-muted-dark"
    >
      <p>{new Date().getFullYear()} &copy; All Rights Reserved.</p>
      <p className="mt-1">{siteConfig.footer.builtWithText}</p>
    </footer>
  );
};

export default Footer;
