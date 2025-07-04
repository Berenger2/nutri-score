const nutriColors = { a: "#24b75e", b: "#afd852", c: "#ffe049", d: "#fc9e4f", e: "#e04f37" };

export default function ProductBadges({ nutriscore, nova, additives, allergens }) {
  return (
    <div style={{display:"flex", alignItems:"center", gap:18, marginBottom: 16}}>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ color: "#767676",fontSize: 15 }}>Nutri-Score :</span>
        <span style={{
          display: "inline-block",
          minWidth: 32,
          textAlign: "center",
          color: "#fff",
          background: nutriColors[nutriscore?.toLowerCase() || "c"] || "#cfcfcf",
          fontWeight: 800,
          fontSize: 17,
          borderRadius: 8,
          padding: "3px 13px"
        }}>
          {nutriscore?.toUpperCase() || "?"}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#767676" ,fontSize: 15 }}>NOVA :</span>
        <span style={{
          display: "inline-block",
          fontWeight: 700,
          fontSize: 17,
          background: "#e6f6f6",
          borderRadius: 8,
          padding: "3px 10px"
        }}>
          {nova || "?"}
        </span>
      </div>
      <div style={{marginLeft:16}}>
        <span style={{ color: "#767676" ,fontSize: 15 }}>Additifs :</span>
        <span style={{
          marginLeft: 7,
          fontWeight: 700,
          background: "#ffe0e6",
          borderRadius: 8,
          padding: "2px 12px"
        }}>
          {additives ?? 0}
        </span>
      </div>
      <div style={{marginLeft:16}}>
        <span style={{ color: "#767676" ,fontSize: 15 }}>Allergènes :</span>
        <span style={{
          marginLeft: 7,
          fontWeight: 700,
          background: "#fde3b2",
          borderRadius: 8,
          padding: "2px 12px"
        }}>
          {allergens || "Aucun"}
        </span>
      </div>
    </div>
  );
}
