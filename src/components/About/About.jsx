import { useSelector } from "react-redux";
import { userdata } from "../../assets/data";
const About = () => {
  const { isDark } = useSelector((state) => state.darkMode);

  return (
    <div id="about" className={`about ${isDark ? "darktheme" : "lighttheme"}`}>
      <h1>About Me</h1>
      <section>
        <section className="sectionLeft">
          <h3>GET TO KNOW ME!</h3>
          <div>
            <p>
              {userdata?.about}
            </p>
            <span>
              {userdata?.about_tech}
            </span>
          </div>
        </section>
        <section className="sectionRight">
          <h3>MY SKILLS</h3>
          <div>
            {userdata?.skills.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`skills ${!isDark ? "darktheme" : "lighttheme"}`}
                  style={{ transition: `all ease-in  ${index / 10}s` }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
