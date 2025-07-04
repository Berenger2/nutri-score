import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { getProductByCode } from "../api/api";
import ProductImage from "../components/ProductImage";
import ProductInfos from "../components/ProductInfos";
import ProductBadges from "../components/ProductBadges";
import ProductNutrition from "../components/ProductNutrition";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Typography,
  Button,
  Divider,
  Paper,
  Skeleton
} from "@mui/material";

export default function ProductDetail() {
  const { code } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (code) {
      getProductByCode(code).then(setProduct);
    }
  }, [code]);

  if (!product)
    return (
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Skeleton variant="rectangular" width={280} height={180} sx={{ mx: "auto", mb: 2 }} />
        <Typography variant="h5" color="text.secondary">Chargement...</Typography>
      </Box>
    );

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        my: { xs: 3, md: 6 },
        px: { xs: 1, md: 3 }
      }}
    >
      <Button
        component={RouterLink}
        to="/"
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 2,
          fontWeight: 500,
          color: "#226",
          textTransform: "none",
          bgcolor: "#f7f8fc",
          borderRadius: 2,
          px: 2,
          py: 1.2,
          boxShadow: "none",
          "&:hover": { bgcolor: "#e6e8f0" }
        }}
      >
        Retour à la liste
      </Button>

      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          alignItems: { xs: "center", md: "flex-start" },
          p: { xs: 2, md: 4 },
          borderRadius: 5,
          background: "#fff",
          boxShadow: "0 4px 18px #24455b08",
        }}
      >
        <Box>
          <ProductImage
            src={product.image_front_url || product.image_front_small_url || product.image_thumb_url}
            alt={product.product_name}
            sx={{
              width: 220,
              height: 220,
              borderRadius: 4,
              boxShadow: "0 2px 12px #aac4e322"
            }}
          />
        </Box>

        {/* INFOS ET BADGES */}
        <Box flex={1}>

          <ProductInfos
            name={product.product_name}
            brands={product.brands}
            code={product.code}
            quantity={product.quantity}
            packaging={product.packaging}
            categories={product.categories}
            ingredients={product.ingredients_text}
          />
          <ProductBadges
            nutriscore={product.nutriscore_grade}
            nova={product.nova_group}
            additives={product.additives_n}
            allergens={product.allergens}
          />
          <Divider sx={{ my: 2 }} />
          <ProductNutrition nutriments={product.nutriments} />
        </Box>
      </Paper>
    </Box>
  );
}
