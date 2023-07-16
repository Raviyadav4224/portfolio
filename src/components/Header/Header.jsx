import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import githubIcon from "../../assets/icons/github.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import darkmode from "../../assets/icons/darkmode.svg";
const Header = () => {
  const [isDark,setIsDark]=useState(false)
  return (
    <nav>
      <div className="left">
        <NavLink className='logo' to="/">Kumar.</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Work">Work </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="right">
        <img src={githubIcon} alt="" onClick={()=>window.open('https://github.com/Raviyadav4224')}/>
        <img src={instagramIcon} alt="" onClick={()=>window.open('https://www.instagram.com/ravi_kumar4224/')}/>
        <img src={linkedinIcon} alt="" onClick={()=>window.open('https://www.linkedin.com/in/ravi-kumar-bb7111260/')}/>
        <img src={darkmode} alt="" onClick={()=>setIsDark(!isDark)}/>
      </div>
    </nav>
  );
};

export default Header;
