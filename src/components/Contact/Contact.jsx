import React from "react";
import "./Contact.scss";
import email from "../../assets/icons/email.svg";
import location from "../../assets/icons/location.svg";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import useScrollTop from "../../misc/useScrollTop";
const Contact = () => {
  const { isDark } = useSelector((state) => state.darkMode);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_t6abukk", "template_6xf8nmk", event.target, {
        publicKey: "za4RdCgeVoeTx3pcY",
      })
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Email sent successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isDark ? "dark" : "light",
          });
        }
      })
      .catch(() => {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: isDark ? "dark" : "light",
        });
      });
    event.target.reset();
  };
  useScrollTop()
  return (
    <div className={`contact ${isDark ? "darktheme" : "lighttheme"}`}>
      <h1>Contact Me</h1>
      <div className="container">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              maxLength={30}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              maxLength={30}
              required
            />
            <textarea
              type="text"
              rows={10}
              placeholder="Message"
              name="message"
              maxLength={500}
              required
            />
            <button type="submit">Let's Connect</button>
          </form>
        </div>
        <div className="right">
          <div>
            <img src={location} alt="" />
            <div>
              <p>Address</p>
              <p>
                <b>Durgapur,India</b>
              </p>
            </div>
          </div>
          <div>
            <img src={email} alt="" />
            <div>
              <p>Email</p>
              <p>
                <b>raviyadav4224@gmail.com</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
