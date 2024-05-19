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
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="projects" element={<Projects />} />
            <Route path="paintings" element={<Paintings />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
