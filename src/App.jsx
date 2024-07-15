import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import Paintings from "./pages/Paintings";
import Resume from "./components/Resume";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen md:flex md:flex-col justify-between max-w-screen-xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
