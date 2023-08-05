import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import githubIcon from "../../assets/icons/github.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import darkmode from "../../assets/icons/darkmode.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/actions";
const Header = ({ toggleSidebar, setToggleSidebar }) => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.darkMode);
  return (
    <nav>
      <div className="menu">
        {toggleSidebar ? (
          <AiOutlineClose onClick={() => setToggleSidebar(!toggleSidebar)} />
        ) : (
          <AiOutlineMenu onClick={() => setToggleSidebar(!toggleSidebar)} />
        )}
      </div>
      <div className="left">
        <NavLink className="logo" to="/">
          Kumar.
        </NavLink>
        <NavLink className="info" to="/about">
          About
        </NavLink>
        <NavLink className="info" to="/Work">
          Work{" "}
        </NavLink>
        <NavLink className="info" to="/projects">
          Projects
        </NavLink>
        <NavLink className="info" to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="right">
        <img
          src={githubIcon}
          className="info"
          alt=""
          onClick={() => window.open("https://github.com/Raviyadav4224")}
        />
        <img
          src={instagramIcon}
          className="info"
          alt=""
          onClick={() =>
            window.open("https://www.instagram.com/ravi_kumar4224/")
          }
        />
        <img
          src={linkedinIcon}
          className="info"
          alt=""
          onClick={() =>
            window.open("https://www.linkedin.com/in/ravi-kumar-bb7111260/")
          }
        />
        <img
          src={darkmode}
          alt=""
          onClick={() => dispatch(toggleDarkMode(isDark))}
        />
      </div>
    </nav>
  );
};

export default Header;
