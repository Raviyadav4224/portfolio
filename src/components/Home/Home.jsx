import React from "react";
import "./Home.scss";
import developerPic from "../../assets/developerImage/image.webp";
import downloadIcon from '../../assets/icons/download.svg'
const Home = () => {
  return (
    <div className="hero">
      <section className="section1">
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
          <div href="/">Resume <img src={downloadIcon} alt=''/></div>
          <a href="/">Contact</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
