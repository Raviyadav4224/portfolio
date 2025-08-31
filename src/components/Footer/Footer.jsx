import { useSelector } from "react-redux";
const Footer = () => {
  const { isDark } = useSelector((state) => state.darkMode);

  return (
    <footer className={`${isDark ? "darktheme" : "lighttheme"}`}>
      <div>{new Date().getFullYear()} &copy; All Rights Reserved.</div>
      <div>Built with &#9829; by Ravi Kumar</div>
      <div>Thanks for visiting</div>
    </footer>
  );
};

export default Footer;
