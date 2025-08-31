import suitcase from "../assets/icons/suitcase.svg";
import cap from "../assets/icons/cap.svg";
import project1 from "../assets/developerImage/project1.jpg";
import project2 from "../assets/developerImage/project2.jpg";
import project3 from "../assets/developerImage/project3.png";
import project4 from "../assets/developerImage/project4.png";
import project5 from "../assets/developerImage/project5.png";
export const userdata = {
  heading: {
    title: [
      "Turning",
      "Vision",
      "Into",
      "Reality",
      "With",
      "Code",
      "And",
      "Design.",
    ],
    desc: [
      "",
      "As",
      "a",
      "skilled",
      "full-stack",
      "developer,",
      "I",
      "am",
      "dedicated",
      "to",
      "turning",
      "ideas",
      "into",
      "innovative",
      "web",
      "applications.",
      "Explore",
      "my",
      "latest",
      "projects",
      "and",
      "articles,",
      "showcasing",
      "my",
      "expertise",
      "in",
      "React.js",
      "and",
      "web",
      "development.",
    ],
  },
  navbarItems: [
    {
      title: "Kumar",
      path: "hero",
    },
    {
      title: "About",
      path: "about",
    },

    {
      title: "Work",
      path: "work",
    },
    {
      title: "Projects",
      path: "projects",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ],
  workTimeline: [
    {
      title: "TCS",
      year: "Present",
      description: `Currently Working as a Full Stack Web Developer for Passport Seva Project under Govt. of India using Java, Springboot, Hibernate, ReactJs, Jenkins, Docker technology stack `,
      logo: suitcase,
    },
    {
      title: "Btech",
      year: "2017-2021",
      description: `Dr B.C. Roy Engineering College Durgapur, West Bengal (8.75CGPA)`,
      logo: cap,
    },
    {
      title: "Class 12",
      year: "2015",
      description: `Hemsheela Model School Durgapur, West Bengal (87%)`,
      logo: cap,
    },
    {
      title: "Class 10",
      year: "2013",
      description: ` Manisha International School Rajbandh, West Bengal (8.6CGPA)`,
      logo: cap,
    },
  ],
  projectList: [
    {
      title: "Netflix Clone",
      desc: "Created Netflix Clone using ReactJs,Nodejs,MongoDb & JWT.",
      projectURL: "https://raviyadav4224.github.io/netflix_clone/",
      imageURL: project1,
    },
    {
      title: "Food Website",
      desc: "Food website using HTML CSS & JS",
      projectURL: "https://raviyadav4224.github.io/IFoodYou/",
      imageURL: project2,
    },
    {
      title: "Magic Notes",
      desc: "Notes app where you can save your important notes",
      projectURL: "https://raviyadav4224.github.io/MagicNotes/",
      imageURL: project3,
    },
    {
      title: "Puzzle Cube",
      desc: "Fun puzzle game to solve using React",
      projectURL: "https://puzzlecube.onrender.com",
      imageURL: project4,
    },
    {
      title: "Todo App",
      desc: "Todo List App using Javascript",
      projectURL: "https://todoapp-50fy.onrender.com",
      imageURL: project5,
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "Javascript (ES6+)",
    "React Js",
    "Redux Toolkit",
    "Responsive UI/UX",
    "Node Js",
    "Java",
    "Spring",
    "Springboot",
    "JDBC",
    "Hibernate",
    "Spring Data JPA",
    "Spring Security",
    "RESTful APIs",
    "MySQL",
    "Docker",
    "Jenkins",
    "Git",
    "JWT",
  ],
  about: `I'm a Full Stack Developer from Durgapur, West Bengal,India. I'm a
  self-motivated, enthusiastic, goal-oriented individual with ${
    new Date().getFullYear() - 2021
  }+
  years of experience building and maintaing responsive websites.
  Currently I'm working in TCS as a Full Stack developer.`,
  about_tech: `Proficient in building responsive UIs using React.js and
developing robust backend APIs with Spring Boot, Spring Data
JPA, Hibernate, and MySQL.`,
  socialMediaLinks: {
    github: "https://github.com/Raviyadav4224",
    linkedin: "https://www.linkedin.com/in/ravi-kumar-bb7111260/",
    instagram: "https://www.instagram.com/ravi_kumar4224/",
  },
};
