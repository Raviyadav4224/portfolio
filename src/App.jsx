import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Header />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
