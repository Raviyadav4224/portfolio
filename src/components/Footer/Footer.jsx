import React from "react";
import "./Footer.scss";
import { useSelector } from "react-redux";
const Footer = () => {
  const { isDark } = useSelector((state) => state.darkMode);

  return (
    <footer className={`${isDark ? "darkMode" : ""}`}>
      <div>{new Date().getFullYear()} &copy; All Rights Reserved.</div>
      <div>Built with &#9829; by Ravi Kumar</div>
      <div>Thanks for visiting</div>
    </footer>
  );
};

export default Footer;
