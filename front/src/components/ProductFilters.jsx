export default function ProductFilters({
  nutriscore, setNutriscore,
  novascore, setNovascore,
  brand, setBrand
}) {
  return (
    <div style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginBottom: 28,
      flexWrap: "wrap"
    }}>
      <select
        value={nutriscore}
        onChange={e => setNutriscore(e.target.value)}
        style={{
          padding: "9px 14px",
          borderRadius: 8,
          border: "1px solid #e5e5e5",
          background: "#f6f6fb",
          fontSize: 16,
          fontWeight: 500,
          color: "#304b60",
          cursor: "pointer"
        }}
      >
        <option value="">Tous Nutri-Scores</option>
        <option value="A">Nutri-Score A</option>
        <option value="B">Nutri-Score B</option>
        <option value="C">Nutri-Score C</option>
        <option value="D">Nutri-Score D</option>
        <option value="E">Nutri-Score E</option>
      </select>
      <select
        value={novascore}
        onChange={e => setNovascore(e.target.value)}
        style={{
          padding: "9px 14px",
          borderRadius: 8,
          border: "1px solid #e5e5e5",
          background: "#f6f6fb",
          fontSize: 16,
          fontWeight: 500,
          color: "#304b60",
          cursor: "pointer"
        }}
      >
        <option value="">Tous Nova Scores</option>
        <option value="1">NOVA 1</option>
        <option value="2">NOVA 2</option>
        <option value="3">NOVA 3</option>
        <option value="4">NOVA 4</option>
      </select>
      <input
        type="text"
        placeholder="Filtrer par marque"
        value={brand}
        onChange={e => setBrand(e.target.value)}
        style={{
          padding: "9px 14px",
          borderRadius: 8,
          border: "1px solid #e5e5e5",
          background: "#f6f6fb",
          fontSize: 16,
          minWidth: 160
        }}
      />
    </div>
  );
}
