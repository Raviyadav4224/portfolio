import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { useSelector } from "react-redux";
import Github from "../Icons/Github";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const closeSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const { isDark } = useSelector((state) => state.darkMode);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef?.current && !sidebarRef?.current.contains(event.target)) {
        setToggleSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setToggleSidebar]);
  return (
    <div
      className={`sidebar ${toggleSidebar ? "isShow" : "isHidden"} ${
        !isDark ? "darktheme" : "lighttheme"
      }`}
      ref={sidebarRef}
    >
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
      <Github onClick={() => window.open("https://github.com/Raviyadav4224")} />
      <Instagram
        onClick={() => window.open("https://www.instagram.com/ravi_kumar4224/")}
      />
      <Linkedin
        onClick={() =>
          window.open("https://www.linkedin.com/in/ravi-kumar-bb7111260/")
        }
      />
    </div>
  );
};

export default Sidebar;
