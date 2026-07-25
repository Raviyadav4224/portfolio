# Ravi Kumar — Portfolio

Built with **Vite + React + Tailwind CSS + lucide-react**.

## Everything is configured from one file

Almost all content on the site — hero text, about copy, skills, timeline,
projects, contact info, socials — lives in:

```
src/config/site.config.js
```

Edit that file to update the site. You generally shouldn't need to touch a
component to change content.

## Setup

```bash
npm install
cp .env.example .env   # then fill in your resume link + EmailJS keys
npm run dev             # local dev server
npm run build            # production build -> dist/
npm run preview          # preview the production build locally
```

## Structure

```
src/
  config/site.config.js   # <- all your content lives here
  context/ThemeContext.jsx # light/dark mode (localStorage + OS preference)
  components/              # one file per section, all Tailwind + config-driven
  utils/sendEmail.js       # EmailJS wrapper for the contact form
```

## Deploying

Any static host works (Render, Vercel, Netlify, GitHub Pages). Build with
`npm run build` and deploy the `dist/` folder. Set your environment
variables (`VITE_RESUME_LINK`, `VITE_EMAILJS_*`) in your host's dashboard —
don't commit your real `.env` file.
