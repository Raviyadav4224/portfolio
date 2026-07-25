import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import siteConfig from "../config/site.config.js";

export function sendEmail(formEl, isDark) {
  const { serviceId, templateId, publicKey } = siteConfig.contact.emailjs;

  if (!serviceId || !templateId || !publicKey) {
    toast.error("Email isn't configured yet — see .env.example", {
      theme: isDark ? "dark" : "light",
    });
    return;
  }

  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: isDark ? "dark" : "light",
  };

  emailjs
    .sendForm(serviceId, templateId, formEl, { publicKey })
    .then((res) => {
      if (res?.status === 200) {
        toast.success("Email sent successfully", toastOptions);
      }
    })
    .catch(() => {
      toast.error("Something went wrong", toastOptions);
    });
}
