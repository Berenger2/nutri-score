import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  Chip,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SpaIcon from "@mui/icons-material/Spa";
import BlockIcon from "@mui/icons-material/Block";

// Dictionnaire des labels en fr
const KEY_LABELS = {
  percent_estimate: "Proportion estimée (%)",
  percent_max: "Proportion max (%)",
  percent_min: "Proportion min (%)",
  text: "Nom de l’ingrédient",
  vegan: "Vegan",
  vegetarian: "Végétarien"
};

// Champs à masquer
const HIDDEN_KEYS = [
  "id",
  "ciqual_food_code",
  "ecobalyse_code",
  "is_in_taxonomy"
];

export default function IngredientDetailDialog({ open, ingredient, onClose }) {
  if (!open || !ingredient) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: 4,
          px: { xs: 2.5, md: 3.5 },
          py: 3
        }
      }}
    >
      <DialogTitle sx={{ p: 0, mb: 2 }}>
        <Typography fontWeight={700} fontSize={22}>
          Détail ingrédient
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 6,
            color: "#bdbdbd"
          }}
          aria-label="Fermer"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <Stack spacing={2}>
          {Object.entries(ingredient)
            .filter(([k]) => !HIDDEN_KEYS.includes(k))
            .map(([k, v]) => {
              if (v === null || v === undefined || v === "") return null;
              let label = KEY_LABELS[k] || k;
              let value = v;

              if (k === "vegan" || k === "vegetarian") {
                value = (
                  <Chip
                    icon={v === "yes" ? <SpaIcon color="success" /> : <BlockIcon color="error" />}
                    label={v === "yes" ? "Oui" : v === "no" ? "Non" : v}
                    sx={{
                      bgcolor: v === "yes" ? "#e6fbe6" : v === "no" ? "#ffe6e6" : "#fafafa",
                      color: v === "yes" ? "#239d5e" : v === "no" ? "#e74c3c" : "#999",
                      fontWeight: 700,
                      px: 1.2
                    }}
                  />
                );
              }
              if (k.startsWith("percent")) {
                value = (
                  <Typography fontWeight={700} color="#2980b9" component="span">
                    {parseFloat(v).toFixed(1)} %
                  </Typography>
                );
              }
              if (k === "text") {
                value = (
                  <Typography fontWeight={600} fontSize={19} color="#333" component="span">
                    {v}
                  </Typography>
                );
              }
              return (
                <Stack key={k} direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                  <Typography sx={{ minWidth: 155, color: "#666", fontWeight: 500 }}>
                    {label}
                  </Typography>
                  <Box component="span">{value}</Box>
                </Stack>
              );
            })}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
