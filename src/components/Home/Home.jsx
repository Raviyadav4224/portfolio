import React from "react";
import "./Home.scss";
import developerPic from "../../assets/developerImage/profilePic1.jpg";
import resume from "../../assets/developerImage/ResumeFrontEndDeveloper.pdf";
import { useSelector } from "react-redux";
const Home = () => {
  const { isDark } = useSelector((state) => state.darkMode);

  return (
    <div className={`hero ${isDark ? "darkMode" : ""}`}>
      <section className="section1">
        {/* <video  src={developerPic}  muted autoPlay loop alt="" ></video> */}
        <img src={developerPic} alt="" />
      </section>
      <section className="section2">
        <h1>Turning Vision Into Reality With Code And Design. </h1>
        <p>
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="buttonLinks">
          <a href={resume} title="Resume" rel="noreferrer" target="_blank">
            Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
