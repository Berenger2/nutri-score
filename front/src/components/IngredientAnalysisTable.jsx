import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import NoFoodIcon from "@mui/icons-material/NoFood";

export default function IngredientAnalysisTable({ data, onSelect }) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ mt: 3, borderRadius: 2, boxShadow: "0 2px 10px #a6b6c708" }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#f7f7fa" }}>
            <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Ingrédient</TableCell>
            <TableCell align="center" sx={{ fontWeight: 700 }}>Vegan</TableCell>
            <TableCell align="center" sx={{ fontWeight: 700 }}>Végétarien</TableCell>
            <TableCell align="center" sx={{ fontWeight: 700 }}>Proportion estimée</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((ing, idx) => {
            let bg = "#fff";
            if (ing.vegan === "no") bg = "#ffeaea";
            else if (ing.vegetarian === "no") bg = "#fffbe5";

            return (
              <TableRow
                key={idx}
                onClick={() => onSelect(ing)}
                hover
                sx={{
                  background: bg,
                  fontWeight: (ing.vegan === "no" || ing.vegetarian === "no") ? 600 : 400,
                  cursor: "pointer",
                  transition: "background 0.15s"
                }}
                title="Voir les détails"
              >
                <TableCell sx={{ fontWeight: 600, fontSize: 16 }}>
                  {ing.text}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    icon={ing.vegan === "yes" ? <SpaIcon color="success" /> : <NoFoodIcon color="error" />}
                    label={ing.vegan === "yes" ? "Oui" : ing.vegan === "no" ? "Non" : "?"}
                    size="small"
                    sx={{
                      bgcolor: ing.vegan === "yes" ? "#e6fbe6" : ing.vegan === "no" ? "#ffe6e6" : "#fafafa",
                      color: ing.vegan === "yes" ? "#239d5e" : ing.vegan === "no" ? "#e74c3c" : "#999",
                      fontWeight: 700,
                      minWidth: 64
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    icon={ing.vegetarian === "yes" ? <SpaIcon color="success" /> : <NoFoodIcon color="warning" />}
                    label={ing.vegetarian === "yes" ? "Oui" : ing.vegetarian === "no" ? "Non" : "?"}
                    size="small"
                    sx={{
                      bgcolor: ing.vegetarian === "yes" ? "#e6fbe6" : ing.vegetarian === "no" ? "#fffbe5" : "#fafafa",
                      color: ing.vegetarian === "yes" ? "#239d5e" : ing.vegetarian === "no" ? "#e67e22" : "#999",
                      fontWeight: 700,
                      minWidth: 64
                    }}
                  />
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, fontSize: 15, color: "#2762f0" }}>
                  {ing.percent_estimate
                    ? `${Math.round(ing.percent_estimate)} %`
                    : "N/A"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
