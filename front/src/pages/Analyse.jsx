import React from "react";
import IngredientAnalysis from "../components/IngredientAnalysis";

export default function Analyse() {
  return (
    <main style={{ maxWidth: 700, margin: "40px auto", padding: 16 }}>
      <h1>Analyse d’ingrédients</h1>
      <IngredientAnalysis />
    </main>
  );
}
