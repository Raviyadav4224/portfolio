import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import { Toaster } from "react-hot-toast";
import BottomNav from "./components/BottomNav";
const App = () => {
  return (
    <>
      <Header/>
      <Home />
      <About />
      <Projects />
      <Work />
      <Contact />
      <Footer />
      <BottomNav />
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
