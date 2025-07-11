import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layout components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Services from "./pages/services";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
