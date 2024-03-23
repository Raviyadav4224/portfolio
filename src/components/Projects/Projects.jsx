import React from "react";
import "./Projects.scss";
import project1 from "../../assets/developerImage/project1.png";
import project2 from "../../assets/developerImage/project2.png";
import project3 from "../../assets/developerImage/project3.png";
import project4 from "../../assets/developerImage/project4.png";
import project5 from "../../assets/developerImage/project5.png";
import { useSelector } from "react-redux";
import Github from "../Icons/Github";
import useScrollTop from "../../misc/useScrollTop";
const Projects = () => {
  const projectList = [
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
  ];
  const { isDark } = useSelector((state) => state.darkMode);
  useScrollTop();
  return (
    <div className={`projects ${isDark ? "darktheme" : "lighttheme"}`}>
      <h1>My Projects</h1>
      <div className="cards">
        {projectList.map((item, index) => {
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
