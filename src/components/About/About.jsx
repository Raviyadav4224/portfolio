import React from "react";
import "./About.scss";
import { useSelector } from "react-redux";
import useScrollTop from "../../misc/useScrollTop";
const About = () => {
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
    "Springboot",
    "Hibernate",
    "Jenkins",
    "Docker",
  ];
  const { isDark } = useSelector((state) => state.darkMode);

  useScrollTop();
  return (
    <div className={`about ${isDark ? "darktheme" : "lighttheme"}`}>
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
              I build websites with a focus on React, Redux, JavaScript. I enjoy
              turning complex problems into simple and beautiful designs.
            </span>
          </div>
        </section>
        <section className="sectionRight">
          <h3>MY SKILLS</h3>
          <div>
            {skills.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`skills ${!isDark ? "darktheme" : "lighttheme"}`}
                  style={{ transition: `all ease-in  ${index / 10}s` }}
                >
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
