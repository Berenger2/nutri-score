import { Stack, Typography, Box } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function ProductInfos({ name, brands, code, quantity, packaging, categories, ingredients }) {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={800}
        color="primary"
        mb={1.2}
        sx={{ letterSpacing: "-0.5px" }}
      >
        {name || "Produit"}
      </Typography>

      <Stack spacing={1.2}>
        <InfoLine icon={<LocalOfferIcon sx={{ fontSize: 19, color: "#95a" }} />} label="Marque(s)" value={brands} />
        <InfoLine icon={<Inventory2OutlinedIcon sx={{ fontSize: 19, color: "#8ad" }} />} label="Code-barres" value={code} />
        <InfoLine icon={<ShoppingBagOutlinedIcon sx={{ fontSize: 19, color: "#da8" }} />} label="Quantité" value={quantity} />
        <InfoLine icon={<CategoryOutlinedIcon sx={{ fontSize: 19, color: "#8ac" }} />} label="Catégories" value={categories} />
        <InfoLine icon={<EmojiFoodBeverageOutlinedIcon sx={{ fontSize: 19, color: "#aa8" }} />} label="Ingrédients" value={ingredients} />
        <InfoLine icon={<ViewWeekOutlinedIcon sx={{ fontSize: 19, color: "#888" }} />} label="Emballage" value={packaging} />
      </Stack>
    </Box>
  );
}

function InfoLine({ icon, label, value }) {
  if (!value) return null;
  return (
    <Stack direction="row" alignItems="center" spacing={1.2}>
      {icon}
      <Typography variant="subtitle2" sx={{ color: "#6c757d", minWidth: 98 }}>
        {label} :
      </Typography>
      <Typography variant="body1" sx={{ color: "#2e425c", fontWeight: 500 }}>
        {value}
      </Typography>
    </Stack>
  );
}
