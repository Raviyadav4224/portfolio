import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import githubIcon from "../../assets/icons/github.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import darkmode from "../../assets/icons/darkmode.svg";
const Header = () => {
  return (
    <nav>
      <div className="left">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="right">
        <img src={githubIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={linkedinIcon} alt="" />
        <img src={darkmode} alt="" />
      </div>
    </nav>
  );
};

export default Header;
