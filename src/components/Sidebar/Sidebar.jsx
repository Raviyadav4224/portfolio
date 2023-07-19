import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import githubIcon from "../../assets/icons/github.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const closeSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className={`sidebar ${toggleSidebar ? "isShow" : "isHidden"}`}>
      <NavLink className="" to="/about" onClick={closeSidebar}>
        About
      </NavLink>
      <NavLink className="" to="/Work" onClick={closeSidebar}>
        Work{" "}
      </NavLink>
      <NavLink className="" to="/projects" onClick={closeSidebar}>
        Projects
      </NavLink>
      <NavLink className="" to="/contact" onClick={closeSidebar}>
        Contact
      </NavLink>
      <img
        src={githubIcon}
        className=""
        alt=""
        onClick={() => window.open("https://github.com/Raviyadav4224")}
      />
      <img
        src={instagramIcon}
        className=""
        alt=""
        onClick={() => window.open("https://www.instagram.com/ravi_kumar4224/")}
      />
      <img
        src={linkedinIcon}
        className=""
        alt=""
        onClick={() =>
          window.open("https://www.linkedin.com/in/ravi-kumar-bb7111260/")
        }
      />
    </div>
  );
};

export default Sidebar;
