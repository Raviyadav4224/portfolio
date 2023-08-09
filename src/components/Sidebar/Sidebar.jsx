import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { useSelector } from "react-redux";
import Github from "../Icons/Github";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
import { stagger, useAnimate } from "framer-motion";
const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const closeSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  const { isDark } = useSelector((state) => state.darkMode);

  const [scope, animate] = useAnimate();
  console.log(scope, animate);

  useEffect(() => {
    if (toggleSidebar) {
      animate([
        ["div", { translateX: ["-100%", "0%"] }],
        ["a", { x: [-1000, 0] }, { delay: stagger(0.05) }],
        ["svg", { x: [-1000, 0] }, { delay: stagger(0.05) }],
      ]);
    } else {
      animate([
        ["a", { x: [0, -1000] }, { delay: stagger(0.01) }],
        ["svg", { x: [0, -1000] }, { delay: stagger(0.01) }],
        ["div", { translateX: ["0%", "-100%"] }],
      ]);
    }
  }, [toggleSidebar, animate]);
  return (
    <div ref={scope}>
      <div
        className={`sidebar ${toggleSidebar ? "isShow" : "isHidden"} ${
          isDark ? "darkMode" : ""
        }`}
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
        <Github
          onClick={() => window.open("https://github.com/Raviyadav4224")}
        />
        <Instagram
          onClick={() =>
            window.open("https://www.instagram.com/ravi_kumar4224/")
          }
        />
        <Linkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/ravi-kumar-bb7111260/")
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
