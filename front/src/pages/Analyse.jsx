import { Box, Typography, Paper } from "@mui/material";
import IngredientAnalysis from "../components/IngredientAnalysis";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";

export default function Analyse() {
  return (
    <Box sx={{ maxWidth: 620, mx: "auto", my: 7, px: 1 }}>
      <Paper elevation={3} sx={{
        borderRadius: 4,
        p: { xs: 2.5, md: 4 },
        textAlign: "center"
      }}>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <ScienceOutlinedIcon sx={{ fontSize: 38, color: "#2e425c" }} />
        </Box>

        <Typography variant="h5" fontWeight={800} color="primary" sx={{ letterSpacing: "-1px" }}>
          Analyse d’ingrédients
        </Typography>

        <IngredientAnalysis />
      </Paper>
    </Box>
  );
}
