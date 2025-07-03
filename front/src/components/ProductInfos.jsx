export default function ProductInfos({ name, brands, code, quantity, packaging, categories, ingredients }) {
  return (
    <div style={{ fontSize: 18 }}>
      <h2 style={{
        margin: "0 0 8px",
        fontSize: 30,
        fontWeight: 800,
        color: "#2e425c"
      }}>
        {name || "Produit"}
      </h2>
      <div style={{marginBottom: 10}}><span style={{ color: "#767676" }}>Marque(s) :</span> <b>{brands}</b></div>
      <div style={{marginBottom: 10}}><span style={{ color: "#767676" }}>Code-barres :</span> <b>{code}</b></div>
      <div style={{marginBottom: 10}}><span style={{ color: "#767676" }}>Quantité :</span> <b>{quantity}</b></div>
      <div style={{marginBottom: 10}}><span style={{ color: "#767676" }}>Catégories :</span> <span style={{ color: "#444" }}> {categories}</span></div>
      <div style={{marginBottom: 10}}><span style={{ color: "#767676" }}>Ingrédients :</span> <span style={{ color: "#444" }}> {ingredients}</span></div>
      <div style={{marginBottom: 12}}><span style={{ color: "#767676" }}>Emballage :</span> <span style={{ color: "#444" }}> {packaging}</span></div>
    </div>
  );
}
