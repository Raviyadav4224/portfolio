import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Header/>
      <Home />
      <Projects />
      <About />
      <Work />
      <Contact />
      <Footer />
      <Toaster
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 4000,
          },
        }}
      />
    </>
  );
};

export default App;
