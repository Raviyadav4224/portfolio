import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaFolderOpen,
  FaMoon,
} from "react-icons/fa";
import "./BottomNav.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/actions";
import Github from "./Icons/Github";
import Instagram from "./Icons/Instagram";
import Linkedin from "./Icons/Linkedin";
import { userdata } from "../assets/data";

const BottomNav = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.darkMode);

  return (
    <div className={`bottom-nav ${isDark ? "dark" : "light"}`}>
      {/* Internal navigation */}
      <a href="#hero" data-tooltip="Home">
        <FaHome />
      </a>
      <a href="#about" data-tooltip="About">
        <FaBriefcase />
      </a>
      <a href="#projects" data-tooltip="Projects">
        <FaFolderOpen />
      </a>
      <a href="#work" data-tooltip="Education">
        <FaGraduationCap />
      </a>

      <span
        onClick={() => window.open(userdata?.socialMediaLinks?.github, "_blank")}
        data-tooltip="GitHub"
      >
        <Github />
      </span>
      <span
        onClick={() => window.open(userdata?.socialMediaLinks?.instagram, "_blank")}
        data-tooltip="Instagram"
      >
        <Instagram />
      </span>
      <span
        onClick={() => window.open(userdata?.socialMediaLinks?.linkedin, "_blank")}
        data-tooltip="LinkedIn"
      >
        <Linkedin />
      </span>

      {/* Dark mode toggle */}
      <a
        href="#"
        onClick={() => dispatch(toggleDarkMode(isDark))}
        data-tooltip="Change Theme"
      >
        <FaMoon />
      </a>
    </div>
  );
};

export default BottomNav;
