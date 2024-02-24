import React from "react";
import "./Work.scss";
import suitcase from "../../assets/icons/suitcase.svg";
import cap from "../../assets/icons/cap.svg";
import Timeline from "../Timeline/Timeline";
import { useSelector } from "react-redux";
import useScrollTop from "../../misc/useScrollTop";
const Work = () => {
  const timelineData = [
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
  ];
  const { isDark } = useSelector((state) => state.darkMode);
  useScrollTop()
  return (
    <div className={`work ${isDark ? "darktheme" : "lighttheme"}`}>
      <h1>Work & Education</h1>
          {timelineData?.map((item, index) => {
            return (
              <Timeline
                left={index % 2 === 0 ? true : false}
                logo={item.logo}
                title={item.title}
                description={item.description}
                year={item.year}
                key={index}
                isDark={isDark}
              />
            );
          })}
    </div>
  );
};

export default Work;
