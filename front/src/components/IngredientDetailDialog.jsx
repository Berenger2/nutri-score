// Dictionnaire des labels en fr
const KEY_LABELS = {
  percent_estimate: "Proportion estimée (%)",
  percent_max: "Proportion max (%)",
  percent_min: "Proportion min (%)",
  text: "Nom de l’ingrédient",
  vegan: "Vegan",
  vegetarian: "Végétarien"
};

// Champs à masquer
const HIDDEN_KEYS = [
  "id",
  "ciqual_food_code",
  "ecobalyse_code",
  "is_in_taxonomy"
];

export default function IngredientDetailDialog({ open, ingredient, onClose }) {
  if (!open || !ingredient) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.3)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: "32px 32px 24px",
          minWidth: 350,
          maxWidth: 410,
          boxShadow: "0 8px 32px #0002",
          position: "relative",
          fontFamily: "sans-serif"
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 14,
            background: "none",
            border: "none",
            fontSize: 26,
            color: "#bbb",
            cursor: "pointer"
          }}
          title="Fermer"
        >×</button>
        <h2 style={{marginBottom: 16, fontWeight: 700, fontSize: 22}}>Détail ingrédient</h2>
        <ul style={{listStyle: "none", padding: 0, margin: 0}}>
          {Object.entries(ingredient)
            .filter(([k]) => !HIDDEN_KEYS.includes(k))
            .map(([k, v]) => {
              if (v === null || v === undefined || v === "") return null;
              let label = KEY_LABELS[k] || k;
              let value = v;
              if (k === "vegan" || k === "vegetarian") {
                value = (
                  <span style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: 14,
                    color: "#fff",
                    background: v === "yes" ? "#27ae60" : v === "no" ? "#e74c3c" : "#bbb",
                    fontWeight: "bold",
                    marginLeft: 6
                  }}>
                    {v === "yes" ? "Oui" : v === "no" ? "Non" : v}
                  </span>
                );
              }
              if (k.startsWith("percent")) {
                value = <b style={{color:"#2980b9"}}>{parseFloat(v).toFixed(1)} %</b>;
              }
              if (k === "text") {
                value = <span style={{fontWeight: 600, fontSize: 19, color:"#333"}}>{v}</span>;
              }
              return (
                <li key={k} style={{marginBottom: 10, display:"flex"}}>
                  <span style={{minWidth: 145, color: "#666", fontWeight: 500}}>
                    {label}
                  </span>
                  <span style={{marginLeft: 8}}>{value}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
