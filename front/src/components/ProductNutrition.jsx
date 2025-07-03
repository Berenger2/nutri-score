export default function ProductNutrition({ nutriments }) {
  return (
    <div style={{margin: "18px 0 0 0"}}>
      <div style={{ color: "#767676", fontWeight: 600, marginBottom: 2 }}>Nutriments (pour 100g) :</div>
      <ul style={{ marginLeft: 18, fontSize: 17, marginTop: 0 }}>
        <li>Calories : <b>{nutriments?.["energy-kcal_100g"] ?? "?"} kcal</b></li>
        <li>Sucres : <b>{nutriments?.["sugars_100g"] ?? "?"} g</b></li>
        <li>Sel : <b>{nutriments?.["salt_100g"] ?? "?"} g</b></li>
        <li>Matières grasses : <b>{nutriments?.["fat_100g"] ?? "?"} g</b></li>
      </ul>
    </div>
  );
}
