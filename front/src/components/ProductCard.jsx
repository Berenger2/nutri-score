import React from "react";

// Normalisation des données produit
function normalizeProduct(p) {
  if (typeof p === "string") {
    return {
      code: null,
      product_name: p,
      brands: "",
      nutriscore_grade: "",
      nova_group: "",
      image: "",
    };
  } else if (typeof p === "object") {
    return {
      code: p.code ?? null,
      product_name: p.product_name || p.nom || p.name || "",
      brands: p.brands || "",
      nutriscore_grade: p.nutriscore_grade || "",
      nova_group: p.nova_group || "",
      image: p.image_thumb_url || p.image_front_small_url || p.image_front_url || "",
    };
  } else {
    return {
      code: null,
      product_name: JSON.stringify(p),
      brands: "",
      nutriscore_grade: "",
      nova_group: "",
      image: "",
    };
  }
}

export default function ProductCard({ product }) {
  const p = normalizeProduct(product);

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 8,
        background: "#f8f8f8",
        borderRadius: 8,
        padding: 8,
      }}
    >
      {p.image ? (
        <img
          src={p.image}
          alt={p.product_name}
          style={{ width: 32, height: 32, objectFit: "cover", marginRight: 12, borderRadius: 4 }}
        />
      ) : (
        <div style={{ width: 32, height: 32, marginRight: 12, background: "#ddd", borderRadius: 4 }} />
      )}
      <div>
        <strong>{p.product_name || "(Sans nom)"}</strong>
        {p.brands && <span style={{ marginLeft: 8, color: "#888" }}>{p.brands}</span>}
        {p.nutriscore_grade && (
          <span style={{ marginLeft: 8, color: "#333" }}>
            Nutri-score: <b style={{ textTransform: "uppercase" }}>{p.nutriscore_grade}</b>
          </span>
        )}
        {p.nova_group && (
          <span style={{ marginLeft: 8, color: "#333" }}>
            Nova: <b>{p.nova_group}</b>
          </span>
        )}
      </div>
    </li>
  );
}
