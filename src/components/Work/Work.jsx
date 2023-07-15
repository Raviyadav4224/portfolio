import React from "react";
import "./Work.scss";
import suitcase from "../../assets/icons/suitcase.svg";
import cap from "../../assets/icons/cap.svg";
import Timeline from "../Timeline/Timeline";
const Work = () => {
  const timelineData = [
    {
      title: "Btech",
      year: "2017-2021",
      description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
      ipsam atque eius perferendis sed molestiae facilis nesciunt qui harum
      praesentium neque repellendus inventore eligendi quod nostrum
      reprehenderit esse unde`,
      logo:cap
    },
    {
      title: "Btech",
      year: "2017-2021",
      description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
      ipsam atque eius perferendis sed molestiae facilis nesciunt qui harum
      praesentium neque repellendus inventore eligendi quod nostrum
      reprehenderit esse unde`,
      logo:suitcase
    },
    {
      title: "Btech",
      year: "2017-2021",
      description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
      ipsam atque eius perferendis sed molestiae facilis nesciunt qui harum
      praesentium neque repellendus inventore eligendi quod nostrum
      reprehenderit esse unde`,
      logo:cap
    },
    {
      title: "Btech",
      year: "2017-2021",
      description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
      ipsam atque eius perferendis sed molestiae facilis nesciunt qui harum
      praesentium neque repellendus inventore eligendi quod nostrum
      reprehenderit esse unde`,
      logo:suitcase
    },
  ];

  return (
    <div className="work">
      <h1>Education & Work</h1>
      {timelineData?.map((item, index) => {
        return (
          <Timeline
            left={index % 2 === 0 ? true : false}
            logo={item.logo}
            title={item.title}
            description={item.description}
            year={item.year}
          />
        );
      })}
    </div>
  );
};

export default Work;
