export default function ProductFilters({ nutriscore, setNutriscore, novascore, setNovascore, brand, setBrand }) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
      <select value={nutriscore} onChange={e => setNutriscore(e.target.value)} style={{ padding: 8 }}>
        <option value="">Tous Nutri-Scores</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
      </select>
      <select value={novascore} onChange={e => setNovascore(e.target.value)} style={{ padding: 8 }}>
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
        style={{ padding: 8, width: 160 }}
      />
    </div>
  );
}
