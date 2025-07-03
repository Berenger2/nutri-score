import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import SearchBar from "../components/SearchBar";
import { getAllProducts, searchProduct} from "../api/api";
import { filterProducts } from "../utils/filterProducts";
import IngredientAnalysis from "../components/IngredientAnalysis";

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

  // Filtrage centralisé (utils)
  const validProducts = filterProducts(products, nutriscore, novascore, brand);

  return (
    <main style={{ maxWidth: 700, margin: "40px auto", padding: 16 }}>
      <h1>Bienvenue sur SoGood</h1>
      <SearchBar search={search} setSearch={setSearch} onSubmit={handleSearch} />
      <ProductFilters
        nutriscore={nutriscore} setNutriscore={setNutriscore}
        novascore={novascore} setNovascore={setNovascore}
        brand={brand} setBrand={setBrand}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {validProducts.length === 0 ? (
          <li>Aucun produit</li>
        ) : (
          validProducts.map((p, idx) => <ProductCard key={p.code || p.product_name || idx} product={p} />)
        )}
      </ul>
    </main>
  );
}
