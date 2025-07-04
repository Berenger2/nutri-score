import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import SearchBar from "../components/SearchBar";
import { getAllProducts, searchProduct } from "../api/api";
import { filterProducts } from "../utils/filterProducts";
import {
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [nutriscore, setNutriscore] = useState("");
  const [novascore, setNovascore] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    searchProduct(search).then(setProducts);
  };

  const validProducts = filterProducts(products, nutriscore, novascore, brand);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "#f6f8fb",
        py: { xs: 2, md: 5 },
      }}
    >
      <Typography
        variant="h3"
        fontWeight={900}
        mb={3}
        color="primary"
        sx={{ letterSpacing: "-1px", textAlign: "center" }}
      >
        Bienvenue sur SoGood
      </Typography>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 1800,
          mx: "auto",
          mb: 2,
          p: { xs: 2, md: 3 },
          borderRadius: 4,
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={4}>
            <SearchBar search={search} setSearch={setSearch} onSubmit={handleSearch} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductFilters
              nutriscore={nutriscore}
              setNutriscore={setNutriscore}
              novascore={novascore}
              setNovascore={setNovascore}
              brand={brand}
              setBrand={setBrand}
              only="nutriscore"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductFilters
              nutriscore={nutriscore}
              setNutriscore={setNutriscore}
              novascore={novascore}
              setNovascore={setNovascore}
              brand={brand}
              setBrand={setBrand}
              only="novascore"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductFilters
              nutriscore={nutriscore}
              setNutriscore={setNutriscore}
              novascore={novascore}
              setNovascore={setNovascore}
              brand={brand}
              setBrand={setBrand}
              only="brand"
            />
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="subtitle2" sx={{ color: "#889", mb: 1, ml: 2 }}>
        {validProducts.length} produit{validProducts.length > 1 ? "s" : ""} trouvé{validProducts.length > 1 ? "s" : ""}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
          gap: 3,
          alignItems: "stretch",
          width: "100%",
          background: "#fafdff",
          borderRadius: 2,
          p: { xs: 1, md: 2 },
        }}
      >
        {validProducts.length === 0 ? (
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ gridColumn: "1/-1" }}
          >
            Aucun produit
          </Typography>
        ) : (
          validProducts.map((p, idx) => (
            <ProductCard product={p} key={p.code || idx} />
          ))
        )}
      </Box>
    </Box>
  );
}
