import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductByCode } from "../api/api";
import ProductImage from "../components/ProductImage";
import ProductInfos from "../components/ProductInfos";
import ProductBadges from "../components/ProductBadges";
import ProductNutrition from "../components/ProductNutrition";

export default function ProductDetail() {
  const { code } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (code) {
      getProductByCode(code).then(setProduct);
    }
  }, [code]);

  if (!product) return <div style={{ padding: 40 }}>Chargement...</div>;

  return (
    <main style={{
      maxWidth: 760,
      margin: "40px auto",
      padding: 28,
      background: "#fff",
      borderRadius: 18,
      boxShadow: "0 2px 12px #0001"
    }}>
      <Link to="/" style={{
        color: "#333",
        textDecoration: "none",
        fontWeight: "bold",
        marginBottom: 12,
        display: "inline-block"
      }}>
        ← Retour à la liste
      </Link>
      <div style={{
        display: "flex",
        gap: 36,
        alignItems: "flex-start"
      }}>
        <ProductImage
          src={product.image_front_url || product.image_front_small_url || product.image_thumb_url}
          alt={product.product_name}
        />
        <div style={{ flex: 1 }}>
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
          <ProductNutrition nutriments={product.nutriments} />
        </div>
      </div>
    </main>
  );
}
