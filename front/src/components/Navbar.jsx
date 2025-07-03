import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav style={{
      background: "#2e425c",
      padding: "14px 0",
      marginBottom: 32,
      display: "flex",
      justifyContent: "center",
      gap: 32,
    }}>
      <Link
        to="/"
        style={{
          color: location.pathname === "/" ? "#66f" : "#fff",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Produits
      </Link>
      <Link
        to="/analyse"
        style={{
          color: location.pathname === "/analyse" ? "#66f" : "#fff",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Analyse d'ingrédients
      </Link>
      <Link to="/scan"   style={{
          color: location.pathname === "/scan" ? "#66f" : "#fff",
          textDecoration: "none",
          fontWeight: "bold",
        }}>
  Scanner un code-barres
</Link>
    </nav>
  );
}
