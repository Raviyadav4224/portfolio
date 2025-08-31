import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/actions";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import Instagram from "../Icons/Instagram";
import DarkMode from "../Icons/DarkMode";
import LightMode from "../Icons/LightMode";
import { userdata } from "../../assets/data";
const Header = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.darkMode);

  return (
    <nav className={`${isDark ? "darktheme" : "lighttheme"}`}>
      <div className={`left `}>
        {userdata?.navbarItems.map((item, index) => (
          <a
            key={item?.title}
            className={`${index === 0 ? "logo" : "info"} ${
              isDark ? "darktheme" : "lighttheme"
            }`}
            href={`#${item?.path}`}
          >
            {item?.title}
          </a>
        ))}
      </div>
      <div className="right">
        <Github
          onClick={() => window.open(userdata?.socialMediaLinks?.github)}
          className="github info"
        />
        <Instagram
          onClick={() =>
            window.open(userdata?.socialMediaLinks?.instagram)
          }
          className="instagram info"
        />
        <Linkedin
          onClick={() =>
            window.open(userdata?.socialMediaLinks?.linkedin)
          }
          className="linkedin info"
        />
        {isDark ? (
          <LightMode
            onClick={() => dispatch(toggleDarkMode(isDark))}
            className="lightModeSvg"
          />
        ) : (
          <DarkMode
            onClick={() => dispatch(toggleDarkMode(isDark))}
            className="darkModeSvg"
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
