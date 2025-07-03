export default function IngredientAnalysisTable({ data, onSelect }) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%", marginTop: 20 }}>
      <thead>
        <tr style={{ background: "#e0e0e0" }}>
          <th style={{ padding: 8 }}>Ingrédient</th>
          <th style={{ padding: 8 }}>Vegan</th>
          <th style={{ padding: 8 }}>Végétarien</th>
          <th style={{ padding: 8 }}>Proportion estimée</th>
          <th style={{ padding: 8 }}>Info</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ing, idx) => (
          <tr
            key={idx}
            onClick={() => onSelect(ing)}
            style={{
              background: ing.vegan === "no" ? "#ffeaea" : (ing.vegetarian === "no" ? "#fffbe5" : "#f7f7fa"),
              fontWeight: (ing.vegan === "no" || ing.vegetarian === "no") ? "bold" : "normal",
              cursor: "pointer"
            }}
            title="Voir les détails"
          >
            <td style={{ padding: 8 }}>{ing.text}</td>
            <td style={{ padding: 8 }}>
              <span style={{
                color: ing.vegan === "yes" ? "#2ecc40" : "#e74c3c",
                fontWeight: "bold"
              }}>
                {ing.vegan === "yes" ? "✔" : ing.vegan === "no" ? "✘" : "?"}
              </span>
            </td>
            <td style={{ padding: 8 }}>
              <span style={{
                color: ing.vegetarian === "yes" ? "#2ecc40" : "#e67e22",
                fontWeight: "bold"
              }}>
                {ing.vegetarian === "yes" ? "✔" : ing.vegetarian === "no" ? "✘" : "?"}
              </span>
            </td>
            <td style={{ padding: 8 }}>
              {ing.percent_estimate
                ? `${Math.round(ing.percent_estimate)}%`
                : "N/A"}
            </td>
            <td style={{ padding: 8, fontSize: 12 }}>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
