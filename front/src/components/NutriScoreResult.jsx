import { Alert } from "@mui/material";

export default function NutriScoreResult({ result }) {
  if (!result) return null;
  const colors = {
    A: { bg: "#e5f7ee", color: "#24b75e" },
    B: { bg: "#f4fae5", color: "#afd852" },
    C: { bg: "#fcfbe5", color: "#e7b812" },
    D: { bg: "#fff6ea", color: "#fc9e4f" },
    E: { bg: "#fae7e5", color: "#e04f37" },
  };
  const { bg, color } = colors[result] || {};
  return (
    <Alert
      severity="success"
      sx={{
        mt: 3,
        fontSize: 21,
        fontWeight: 800,
        display: "flex",
        justifyContent: "center",
        bgcolor: bg,
        color: color
      }}
    >
      Nutri-Score prédit : {result}
    </Alert>
  );
}
