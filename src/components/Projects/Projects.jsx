import React from "react";
import "./Projects.scss";
import project1 from "../../assets/developerImage/project1.png";
import project2 from "../../assets/developerImage/project2.png";
import project3 from "../../assets/developerImage/project3.png";
import githubIcon from "../../assets/icons/github.svg";
const Projects = () => {
  const projectList=[
    {
      title:"Netflix Clone",
      desc:"Created Netflix Clone using ReactJs,Nodejs,MongoDb & JWT.",
      repoURL:'https://raviyadav4224.github.io/netflix_clone/',
      imageURL:project1
    },
    {
      title:"Food Website",
      desc:"Food website using HTML CSS & JS",
      repoURL:'https://raviyadav4224.github.io/IFoodYou/',
      imageURL:project2
    },
    {
      title:"Magic Notes",
      desc:"Notes app where you can save your important notes",
      repoURL:'https://raviyadav4224.github.io/MagicNotes/',
      imageURL:project3
    }
  ]
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="cards">
        {
          projectList.map((item,index)=>{
            return (
              <div className="card" key={index}>
              <img src={item.imageURL} alt="" />
              <h3>
                {item.title}
                <img
                  src={githubIcon}
                  className="githubIcon"
                  alt=""
                  onClick={() =>
                    window.open(item.repoURL)
                  }
                />
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
