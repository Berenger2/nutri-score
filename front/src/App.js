import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analyse from "./pages/Analyse";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/product/:code" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
