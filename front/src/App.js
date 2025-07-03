import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analyse from "./pages/Analyse";
import ProductDetail from "./pages/ProductDetail";
import ScanCode from "./pages/ScanCode";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/product/:code" element={<ProductDetail />} />
        <Route path="/scan" element={<ScanCode />} />
      </Routes>
    </Router>
  );
}
