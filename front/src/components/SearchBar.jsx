export default function SearchBar({ search, setSearch, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        marginBottom: 18
      }}
    >
      <input
        type="text"
        placeholder="Recherche produit"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          padding: "11px 18px",
          borderRadius: 8,
          border: "1px solid #ddd",
          fontSize: 18,
          background: "#fafbfc",
          minWidth: 220,
          outline: "none",
          flex: 1
        }}
      />
      <button
        type="submit"
        style={{
          padding: "11px 24px",
          borderRadius: 8,
          background: "#2e425c",
          color: "#fff",
          border: "none",
          fontSize: 18,
          fontWeight: 700,
          cursor: "pointer",
          transition: "background 0.2s"
        }}
      >
        Rechercher
      </button>
    </form>
  );
}
