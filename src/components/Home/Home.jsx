import React from "react";
import "./Home.scss";
import developerPic from "../../assets/developerImage/profilePic1.jpg";
import { useSelector } from "react-redux";
const Home = () => {
  const { isDark } = useSelector((state) => state.darkMode);
  return (
    <div className={`hero ${isDark ? "darktheme" : "lighttheme"}`}>
      <section className="section1">
        <img src={developerPic} alt="" />
      </section>
      <section className="section2">
        <h1>
          {[
            "Turning",
            "Vision",
            "Into",
            "Reality",
            "With",
            "Code",
            "And",
            "Design.",
          ].map((item, index) => (
            <span
              style={{ transition: `all ease-in  ${index / 50}s` }}
              key={index}
            >
              {item}{" "}
            </span>
          ))}{" "}
        </h1>
        <p>
          {[
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
          ].map((item, index) => (
            <span
              style={{ transition: `all ease-in  ${index / 50}s` }}
              key={index}
            >
              {item}{" "}
            </span>
          ))}
        </p>
        <div
          className={`buttonLinks ${!isDark ? "darktheme" : "lighttheme"}`}
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1tZz-eqa3EQC_g8rr8h2NSgTrVHCE5Qb7Tz3empOKeFM/edit?usp=sharing"
            )
          }
        >
          Resume
        </div>
      </section>
    </div>
  );
};

export default Home;
