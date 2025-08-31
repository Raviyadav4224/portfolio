import React from "react";
import "./Projects.scss";

import { useSelector } from "react-redux";
import Github from "../Icons/Github";
import { userdata } from "../../assets/data";
const Projects = () => {
  const { isDark } = useSelector((state) => state.darkMode);
  return (
    <div
      id="projects"
      className={`projects ${isDark ? "darktheme" : "lighttheme"}`}
    >
      <h1>My Projects</h1>
      <div className="cards">
        {userdata?.projectList.map((item, index) => {
          return (
            <div
              className={`card ${isDark ? "darktheme" : "lighttheme"}`}
              key={index}
            >
              <img
                src={item.imageURL}
                alt=""
                onClick={() => window.open(item.projectURL)}
              />
              <h3>
                {item.title}
                <Github
                  className="githubIcon"
                  onClick={() =>
                    window.open("https://github.com/Raviyadav4224")
                  }
                />
              </h3>
              <small>{item.desc}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
