import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
const App = () => {
  const [toggleSidebar,setToggleSidebar]=useState(false)
  return (
    <>
      <BrowserRouter>
        <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
        <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
