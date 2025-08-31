import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export function sendEmail(inp,isDark){
    emailjs
      .sendForm("service_t6abukk", "template_6xf8nmk", inp, {
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
}