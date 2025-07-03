import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { BASE_URL } from "../config";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then(res => res.json())
      .then(data => setProducts(Array.isArray(data.products) ? data.products : []))
      .catch(err => console.error("Erreur API /products:", err));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/product/search/${encodeURIComponent(search)}`)
      .then(res => res.json())
      .then(data => setProducts(Array.isArray(data.products) ? data.products : []))
      .catch(err => console.error("Erreur API /product/search:", err));
  };

  const validProducts = products.filter(
  p =>
    (typeof p === "object"
      ? (p.product_name || p.nom || p.name)
      : typeof p === "string" && p.trim() !== "")
    &&
    (p.nutriscore_grade && p.nutriscore_grade.toLowerCase() !== "unknown")
);

  return (
    <main style={{ maxWidth: 600, margin: "40px auto", padding: 16 }}>
      <h1>Bienvenue sur SoGood</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Recherche produit"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: 8, width: 220, fontSize: 16 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 12, fontSize: 16 }}>Rechercher</button>
      </form>
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
