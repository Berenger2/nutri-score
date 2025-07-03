export default function SearchBar({ search, setSearch, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Recherche produit"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: 8, width: 220, fontSize: 16 }}
      />
      <button type="submit" style={{ padding: 8, marginLeft: 12, fontSize: 16 }}>Rechercher</button>
    </form>
  );
}
