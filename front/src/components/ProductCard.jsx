import { Link } from "react-router-dom";

const nutriColors = {
  a: "#24b75e", b: "#afd852", c: "#ffe049", d: "#fc9e4f", e: "#e04f37"
};

export default function ProductCard({ product }) {
  return (
    <li style={{
      background: "#fff",
      borderRadius: 14,
      boxShadow: "0 2px 12px #0001",
      marginBottom: 18,
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: 16,
      transition: "box-shadow .2s",
      minHeight: 74
    }}>
      <img
        src={product.image_thumb_url || product.image_front_small_url || product.image_front_url}
        alt={product.product_name}
        style={{
          width: 48,
          height: 48,
          borderRadius: 8,
          background: "#f2f2f2",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{
          fontWeight: 700,
          fontSize: 19,
          color: "#222",
          marginBottom: 2
        }}>
          {product.product_name || <span style={{ color: "#aaa" }}>Produit inconnu</span>}
        </div>
        <div style={{ color: "#666", fontSize: 16, marginBottom: 2 }}>
          <span style={{
            background: "#eef",
            borderRadius: 7,
            padding: "1px 9px",
            fontWeight: 500,
            fontSize: 14,
            marginRight: 7,
          }}>
            {product.brands}
          </span>
          {product.nutriscore_grade && (
            <span style={{
              background: nutriColors[product.nutriscore_grade?.toLowerCase() || "c"],
              color: "#fff",
              borderRadius: 7,
              padding: "1px 11px",
              fontWeight: 700,
              fontSize: 15,
              marginRight: 7,
              textTransform: "uppercase"
            }}>
              {product.nutriscore_grade}
            </span>
          )}
          {product.nova_group && (
            <span style={{
              background: "#e6f6f6",
              borderRadius: 7,
              padding: "1px 9px",
              fontWeight: 600,
              fontSize: 14,
              marginRight: 7
            }}>
              Nova: {product.nova_group}
            </span>
          )}
        </div>
      </div>
      <Link
        to={`/product/${product.code}`}
        style={{
          background: "#2e425c",
          color: "#fff",
          padding: "7px 16px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 15,
          marginLeft: 8,
          transition: "background .2s"
        }}
      >
        Voir fiche
      </Link>
    </li>
  );
}
