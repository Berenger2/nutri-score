import { Box, Typography, Stack } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import OpacityIcon from "@mui/icons-material/Opacity";
import IcecreamIcon from "@mui/icons-material/Icecream";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import NutrientLine from "./NutrientLine";
export default function ProductNutrition({ nutriments }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography
        variant="subtitle1"
        color="#737788"
        fontWeight={600}
        sx={{ mb: 0.5, letterSpacing: 0.1 }}
      >
        Nutriments (pour 100g)
      </Typography>
      <Stack direction="column" spacing={1.2} sx={{ ml: 1 }}>
        <NutrientLine
          icon={<LocalFireDepartmentIcon fontSize="small" color="error" />}
          label="Calories"
          value={nutriments?.["energy-kcal_100g"]}
          unit="kcal"
        />
        <NutrientLine
          icon={<IcecreamIcon fontSize="small" sx={{ color: "#e67e22" }} />}
          label="Sucres"
          value={nutriments?.["sugars_100g"]}
          unit="g"
        />
        <NutrientLine
          icon={<InvertColorsIcon fontSize="small" sx={{ color: "#57b1d6" }} />}
          label="Sel"
          value={nutriments?.["salt_100g"]}
          unit="g"
        />
        <NutrientLine
          icon={<OpacityIcon fontSize="small" sx={{ color: "#b59e72" }} />}
          label="Matières grasses"
          value={nutriments?.["fat_100g"]}
          unit="g"
        />
      </Stack>
    </Box>
  );
}
