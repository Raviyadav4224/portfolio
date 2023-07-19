import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import githubIcon from "../../assets/icons/github.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import darkmode from "../../assets/icons/darkmode.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = ({ toggleSidebar, setToggleSidebar }) => {
  const [isDark, setIsDark] = useState(false);
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
        <img src={darkmode} alt="" onClick={() => setIsDark(!isDark)} />
      </div>
    </nav>
  );
};

export default Header;
