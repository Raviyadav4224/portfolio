import React from "react";
import "./Projects.scss";
import project1 from "../../assets/developerImage/project1.png";
import project2 from "../../assets/developerImage/project2.png";
import project3 from "../../assets/developerImage/project3.png";
import { useSelector } from "react-redux";
import Github from "../Icons/Github";
const Projects = () => {
  const projectList=[
    {
      title:"Netflix Clone",
      desc:"Created Netflix Clone using ReactJs,Nodejs,MongoDb & JWT.",
      projectURL:'https://raviyadav4224.github.io/netflix_clone/',
      imageURL:project1
    },
    {
      title:"Food Website",
      desc:"Food website using HTML CSS & JS",
      projectURL:'https://raviyadav4224.github.io/IFoodYou/',
      imageURL:project2
    },
    {
      title:"Magic Notes",
      desc:"Notes app where you can save your important notes",
      projectURL:'https://raviyadav4224.github.io/MagicNotes/',
      imageURL:project3
    }
  ]
  const { isDark } = useSelector((state) => state.darkMode);
  return (
    <div className={`projects ${isDark ? "darkModeProject" : ""}`}>
      <h1>My Projects</h1>
      <div className="cards">
        {
          projectList.map((item,index)=>{
            return (
              <div className="card" key={index}>
              <img src={item.imageURL} alt="" onClick={()=>window.open(item.projectURL)}/>
              <h3>
                {item.title}
                <Github className="githubIcon" onClick={() => window.open("https://github.com/Raviyadav4224")} />
              </h3>
              <small>
                {item.desc}
              </small>
            </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Projects;
