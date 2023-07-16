import React from "react";
import "./About.scss";
const About = () => {
  // const skills = [
  //   "React Js, Javascript, Css,Git ,HTML,Node Js, Framer Motion, JWT",
  // ];
  const skills = [
    "React Js",
    "Javascript",
    "Css",
    "Git",
    "HTML",
    "Node Js",
    "Framer Motion",
    "JWT",
    "Java",
    "Spingboot",
    "Hibernate",
    "Jenkins",
    "Docker",
  ];
  return (
    <div className="about">
      <h1>About Me</h1>
      <section>
        <section className="sectionLeft">
          <h3>GET TO KNOW ME!</h3>
          <div>
            <p>
              I'm a Full Stack Developer from Durgapur, West Bengal,India. I'm a
              self-motivated, enthusiastic, goal-oriented individual with 2+
              years of experience building and maintaing responsive websites.
              Currently I'm working in TCS as a Full Stack developer.
            </p>
            <span>
              I build web apps with a focus on React, Redux, JavaScript. I enjoy
              turning complex problems into simple and beautiful designs.
            </span>
          </div>
        </section>
        <section className="sectionRight">
          <h3>MY SKILLS</h3>
          <div>
            {skills.map((item, index) => {
              return (
                <div key={index} className="skills">
                  {item}
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
