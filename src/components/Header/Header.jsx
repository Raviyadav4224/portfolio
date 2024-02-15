import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/actions";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import Instagram from "../Icons/Instagram";
import DarkMode from "../Icons/DarkMode";
import LightMode from "../Icons/LightMode";
const Header = ({ toggleSidebar, setToggleSidebar }) => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.darkMode);
  return (
    <nav className={`${isDark ? "darkMode" : ""}`}>
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
        <Github
          onClick={() => window.open("https://github.com/Raviyadav4224")}
          className="github info"
        />
        <Instagram
          onClick={() =>
            window.open("https://www.instagram.com/ravi_kumar4224/")
          }
          className="instagram info"
        />
        <Linkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/ravi-kumar-bb7111260/")
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
