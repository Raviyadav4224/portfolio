// ────────────────────────────────────────────────────────────────
// EVERYTHING ON THE SITE IS DRIVEN FROM THIS FILE.
// To update your portfolio's content, you should almost never need
// to touch a component — just edit the values below.
// ────────────────────────────────────────────────────────────────

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import profilePic from "../assets/images/profilePic.jpg";

const siteConfig = {
  meta: {
    name: "Ravi Kumar",
    tagline: "Full Stack Developer",
    // Used in <title> and section eyebrows
    shortHandle: "ravi.dev",
  },

  profileImage: profilePic,

  // Resume link — set VITE_RESUME_LINK in your .env file, see .env.example
  resumeLink: import.meta.env.VITE_RESUME_LINK || "#",

  nav: [
    { title: "Ravi.Kumar", path: "hero" },
    { title: "About", path: "about" },
    { title: "Work", path: "work" },
    { title: "Projects", path: "projects" },
    { title: "Contact", path: "contact" },
  ],

  hero: {
    titleLines: ["Turning", "Vision", "Into", "Reality", "With", "Code."],
    description:
      "Backend-focused full stack developer building enterprise-scale " +
      "systems with Java, Spring Boot, Kafka, and Kubernetes — now growing " +
      "into AI-integrated backend engineering. Currently based in Kolkata, " +
      "targeting relocation within India or the EU (Germany / Netherlands).",
  },

  about: {
    intro:
      "I'm a Full Stack Developer (backend-focused) based in Kolkata, India, " +
      "with close to 5 years of experience building and maintaining " +
      "enterprise-scale systems — including a nationwide passport issuance " +
      "platform. I care most about the backend: APIs, data, messaging, and " +
      "the infrastructure that keeps a system reliable under real load.",
    focus:
      "Proficient in building resilient backend services with Java 17 and " +
      "Spring Boot 3, event-driven systems with Kafka, and containerized " +
      "deployments with Docker and Kubernetes — paired with React.js and " +
      "Redux Toolkit on the frontend when a full stack view is needed.",
    // Freeform list of quick facts shown next to the intro. Add/remove freely.
    facts: [
      { label: "Location", value: "Kolkata, India" },
      { label: "Experience", value: `${Math.floor((new Date() - new Date('2021-12-06')) / (1000 * 60 * 60 * 24 * 30.436875) / 12)}.${Math.floor(((new Date() - new Date('2021-12-06')) / (1000 * 60 * 60 * 24 * 30.436875)) % 12)} years` },
      { label: "Currently", value: "TCS — Full Stack Developer" },
      { label: "Certification", value: "AWS Certified Developer – Associate (DVA-02)" },
      { label: "Relocation target", value: "Germany / Netherlands" },
      { label: "German level", value: "Learning A1" },
    ],
  },

  // Skills are grouped so the page can render them as labeled clusters
  // instead of one flat pile of tags. Add a new group or reorder freely.
  skillGroups: [
    {
      label: "Backend",
      skills: ["Java 17", "Spring Boot 3", "Hibernate", "REST APIs", "Microservices", "Kafka"],
    },
    {
      label: "Frontend",
      skills: ["React.js", "Redux Toolkit", "JavaScript (ES6+)", "HTML/CSS"],
    },
    {
      label: "Infra & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "Redis", "Jenkins"],
    },
    {
      label: "Data",
      skills: ["MySQL", "PostgreSQL"],
    },
  ],

  // Rendered as a vertical "commit log" style timeline, most recent first.
  timeline: [
    {
      title: "TCS — Full Stack Developer",
      year: "2021 - Present",
      description:
        "Backend-focused full stack development on a nationwide Passport " +
        "Seva project for the Govt. of India, using Java, Spring Boot, " +
        "Hibernate, React.js, Docker, and Kafka.",
      type: "work",
    },
    {
      title: "B.Tech, Dr B.C. Roy Engineering College",
      year: "2017 – 2021",
      description: "Durgapur, West Bengal — 8.75 CGPA.",
      type: "education",
    },
    {
      title: "Class 12 — Hemsheela Model School",
      year: "2015",
      description: "Durgapur, West Bengal — 87%.",
      type: "education",
    },
    {
      title: "Class 10 — Manisha International School",
      year: "2013",
      description: "Rajbandh, West Bengal — 8.6 CGPA.",
      type: "education",
    },
  ],

  projects: [
    {
      title: "Netflix Clone",
      description: "Netflix UI clone built with React, Node.js, MongoDB & JWT auth.",
      url: "https://raviyadav4224.github.io/netflix_clone/",
      image: project1,
    },
    {
      title: "Food Ordering Website",
      description: "A food ordering site built with plain HTML, CSS & JavaScript.",
      url: "https://raviyadav4224.github.io/IFoodYou/",
      image: project2,
    },
    {
      title: "Magic Notes",
      description: "A notes app for saving and organizing important notes.",
      url: "https://raviyadav4224.github.io/MagicNotes/",
      image: project3,
    },
    {
      title: "Puzzle Cube",
      description: "A browser puzzle game built with React.",
      url: "https://puzzlecube.onrender.com",
      image: project4,
    },
    {
      title: "Todo App",
      description: "A simple todo list app built with vanilla JavaScript.",
      url: "https://todoapp-50fy.onrender.com",
      image: project5,
    },
    // TODO: swap in your newer AI-focused projects once they're deployed —
    // e.g. the AWS Bedrock resume-scoring system, the Spring Boot RAG service
    // (pgvector + AnthropicChatClient), and the AI-powered EU job tracker.
    // Just add objects here in the same shape: { title, description, url, image }.
  ],

  contact: {
    address: "Kolkata, India",
    email: "raviyadav4224@gmail.com",
    // EmailJS credentials — move these to your .env file, see .env.example
    emailjs: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
    },
  },

  socials: {
    github: "https://github.com/Raviyadav4224",
    linkedin: "https://www.linkedin.com/in/ravi-kumar-bb7111260/",
  },

  footer: {
    builtWithText: "Built with care by Ravi Kumar",
  },
};

export default siteConfig;
