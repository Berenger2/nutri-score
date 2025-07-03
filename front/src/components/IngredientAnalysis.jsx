import React, { useState } from "react";
import { analyzeIngredients } from "../api/api";
import IngredientAnalysisTable from "./IngredientAnalysisTable";
import IngredientDetailDialog from "./IngredientDetailDialog";

export default function IngredientAnalysis() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult([]);
    try {
      const res = await analyzeIngredients(input, "fr");
      setResult(res);
    } catch {
      setResult([{ text: "Erreur d'analyse" }]);
    }
    setLoading(false);
  };

  return (
    <section style={{ marginTop: 32 }}>
      <h2>Analyse des ingrédients</h2>
      <form onSubmit={handleAnalyze} style={{ marginBottom: 24 }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={2}
          placeholder="Ex: sel, l'eau, pomme, viande"
          style={{ width: 400, padding: 8 }}
        />
        <button type="submit" style={{ marginLeft: 12 }}>Analyser</button>
      </form>

      {loading && <p>Analyse en cours...</p>}

      {result.length > 0 && (
        <IngredientAnalysisTable data={result} onSelect={setSelected} />
      )}

      <IngredientDetailDialog
        open={!!selected}
        ingredient={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
