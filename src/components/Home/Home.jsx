import { userdata } from "../../assets/data";
import developerPic from "../../assets/developerImage/profilePic1.jpg";
import { useSelector } from "react-redux";

const Home = () => {
  const { isDark } = useSelector((state) => state.darkMode);

  const handleResume = (event) => {
    if (event?.type === "click" || event.key === "Enter") {
      window.open(process.env.REACT_APP_PORTFOLIO_LINK);
    }
  };
  return (
    <div id="hero" className={`hero ${isDark ? "darktheme" : "lighttheme"}`}>
      <section className="section1">
        <img src={developerPic} alt="" />
      </section>
      <section className="section2">
        <h1>
          {userdata?.heading?.title.map((item, index) => (
            <span
              style={{ transition: `all ease-in  ${index / 50}s` }}
              key={index}
            >
              {item}{" "}
            </span>
          ))}{" "}
        </h1>
        <p>
          {userdata?.heading?.desc.map((item, index) => (
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
          onClick={(event) => handleResume(event)}
          tabIndex={0}
          onKeyDown={(event) => handleResume(event)}
        >
          Resume
        </div>
      </section>
    </div>
  );
};

export default Home;
