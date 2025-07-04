import React, { useState } from "react";
import { analyzeIngredients } from "../api/api";
import IngredientAnalysisTable from "./IngredientAnalysisTable";
import IngredientDetailDialog from "./IngredientDetailDialog";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

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
    <Box sx={{ mt: 2.5 }}>
      <form onSubmit={handleAnalyze}>
        <Stack spacing={2}  mb={3}>
          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            multiline
            rows={2}
            placeholder="Ex : sel, l'eau, pomme, viande"
            variant="outlined"
            sx={{ minWidth: 120, maxWidth: 550, flex: 1 }}
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading || !input.trim()}
            sx={{ minWidth: 120, borderRadius: 2 }}
          >
            Analyser
          </Button>
        </Stack>
      </form>

      {loading && (
        <Box sx={{ py: 3, textAlign: "center" }}>
          <CircularProgress size={38} />
          <Typography sx={{ mt: 2, color: "#889" }}>Analyse en cours…</Typography>
        </Box>
      )}

      {!loading && result.length > 0 && (
        <IngredientAnalysisTable data={result} onSelect={setSelected} />
      )}

      <IngredientDetailDialog
        open={!!selected}
        ingredient={selected}
        onClose={() => setSelected(null)}
      />
    </Box>
  );
}
