import { Toaster } from "react-hot-toast";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BottomNav from "./components/BottomNav.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
      <Toaster
        toastOptions={{
          success: { duration: 2000 },
          error: { duration: 4000 },
        }}
      />
    </>
  );
};

export default App;
