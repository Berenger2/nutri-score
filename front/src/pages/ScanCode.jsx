import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ScanCode() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.match(/^\d{8,14}$/)) {
      setError("Merci de saisir un code-barres valide.");
      return;
    }
    setError("");
    navigate(`/product/${code}`);
  };

  return (
    <main style={{
      maxWidth: 420,
      margin: "60px auto",
      padding: 32,
      borderRadius: 18,
      background: "#fff",
      boxShadow: "0 4px 16px #0001",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: 30, fontWeight: 900, marginBottom: 20 }}>Scanner un code-barres</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Ex: 3017620422003"
          style={{
            padding: "14px 20px",
            fontSize: 21,
            borderRadius: 8,
            border: "1px solid #ddd",
            width: "90%",
            marginBottom: 12,
            outline: "none",
            letterSpacing: "1px"
          }}
          autoFocus
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "13px 32px",
            borderRadius: 8,
            background: "#2e425c",
            color: "#fff",
            border: "none",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
            marginTop: 6
          }}
        >
          Scanner
        </button>
      </form>
      {error && <div style={{ color: "#e74c3c", marginBottom: 14 }}>{error}</div>}
      <div style={{ color: "#777", fontSize: 15 }}>
        Simulez un scan en saisissant un code produit.<br />
        Exemple : <b>3017620422003</b>
      </div>
    </main>
  );
}
