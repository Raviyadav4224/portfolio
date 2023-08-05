import React from "react";
import "./Contact.scss";
import email from "../../assets/icons/email.svg";
import location from "../../assets/icons/location.svg";
import { useSelector } from "react-redux";
const Contact = () => {
  const { isDark } = useSelector((state) => state.darkMode);
  return (
    <div className={`${isDark ? "" : "contact"}`}>
      <h1>Contact Me</h1>
      <div className="container">
        <div className="left">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea type="text" rows={10} placeholder="Message" />
            <button>Submit</button>
          </form>
        </div>
        <div className="right">
          <div>
            <img src={location} alt="" />
            <div>
              <p>Address</p>
              <p><b>Durgapur,India</b></p>
            </div>
          </div>
          <div>
            <img src={email} alt="" />
            <div>
              <p>Email</p>
              <p><b>raviyadav4224@gmail.com</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
