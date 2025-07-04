import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const nutriColors = {
  a: "#d3f9df", 
  b: "#eaf6c5",
  c: "#fff9c6",
  d: "#ffe0c0",
  e: "#ffd3d3"
};
const nutriText = {
  a: "#24b75e", b: "#afd852", c: "#ffe049", d: "#fc9e4f", e: "#e04f37"
};
const novaColors = {
  1: "#e3faf7", 2: "#d3f0fc", 3: "#fff2cc", 4: "#ffe6e6"
};
const novaText = {
  1: "#17a589", 2: "#3498db", 3: "#d68910", 4: "#e74c3c"
};

export default function ProductCard({ product }) {
  const nutri = product.nutriscore_grade ? product.nutriscore_grade.toUpperCase() : null;
  const nutriBg = nutri ? nutriColors[nutri.toLowerCase()] : "#f7f7f7";
  const nutriFg = nutri ? nutriText[nutri.toLowerCase()] : "#555";
  const nova = product.nova_group;
  const novaBg = nova ? novaColors[nova] || "#f7f7f7" : "#f7f7f7";
  const novaFg = nova ? novaText[nova] || "#555" : "#555";

  return (
    <Card
      elevation={0}
      sx={{
        width: 320,
        borderRadius: 4,
        overflow: "hidden",
        background: "#fcfbfa",
        border: "1.5px solid #f3f3f3",
        boxShadow: "0 2px 12px #0001",
        display: "flex",
        flexDirection: "column",
        m: "auto",
        transition: "box-shadow .2s, transform .2s",
        "&:hover": {
          boxShadow: "0 8px 24px #2762f013",
          transform: "translateY(-2px) scale(1.012)"
        }
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: 170 }}>
        <CardMedia
          component="img"
          image={
            product.image_front_url ||
            product.image_thumb_url ||
            product.image_front_small_url ||
            "https://via.placeholder.com/320x180?text=Image"
          }
          alt={product.product_name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            bgcolor: "#f7f7f7"
          }}
        />
        {/* Nutri-Score à gauche */}
        {nutri && (
          <Chip
            icon={<RestaurantIcon sx={{ color: nutriFg }} fontSize="small" />}
            label={`Nutri-Score ${nutri}`}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              background: nutriBg,
              color: nutriFg,
              fontWeight: 600,
              fontSize: 15,
              borderRadius: "12px",
              boxShadow: "none",
              px: 1.3,
              zIndex: 2
            }}
          />
        )}

        {nova && (
          <Chip
            label={`NOVA ${nova}`}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              background: novaBg,
              color: novaFg,
              fontWeight: 600,
              fontSize: 15,
              borderRadius: "12px",
              boxShadow: "none",
              px: 1.3,
              zIndex: 2
            }}
          />
        )}
      </Box>

      <Box sx={{
        bgcolor: "#fff",
        textAlign: "center",
        p: "18px 0 12px 0",
        borderTop: "1px solid #f3f3f3"
      }}>
        <Typography
          fontWeight={500}
          fontSize={20}
          color="#283347"
          letterSpacing={0.2}
          sx={{ mb: 1 }}
        >
          {product.product_name || "Nom inconnu"}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          component={Link}
          to={`/product/${product.code}`}
          endIcon={<ArrowForwardIosIcon fontSize="small" />}
          sx={{
            borderRadius: 2,
            borderColor: "#dbeafe",
            background: "#f7fafd",
            color: "#2762f0",
            fontWeight: 500,
            fontSize: 17,
            textTransform: "none",
            boxShadow: "none",
            py: 1,
            transition: "background .2s, color .2s, border .2s",
            "&:hover": {
              background: "#e8f0fc",
              borderColor: "#b6daff",
              color: "#143e7b"
            }
          }}
        >
          Voir fiche
        </Button>
      </Box>
    </Card>
  );
}
