import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home"; // Mengimpor Home dari folder components
import About from "./components/About/About"; // Mengimpor About dari folder components
import Service from "./components/Service/Service";
import Menu from "./components/Menu/Menu";  
import Contact from "./components/Contact/Contact";  

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Service" element={<Service />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Menu" element={<Menu />} />
      <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
