import "./Work.scss";
import Timeline from "../Timeline/Timeline";
import { useSelector } from "react-redux";
import { userdata } from "../../assets/data";
const Work = () => {
  const { isDark } = useSelector((state) => state.darkMode);
  return (
    <div id="work" className={`work ${isDark ? "darktheme" : "lighttheme"}`}>
      <h1>Work & Education</h1>
      {userdata?.workTimeline?.map((item, index) => {
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
