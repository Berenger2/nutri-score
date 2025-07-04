import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn"; // Exemple d'icône à gauche (change si tu veux)

export default function Navbar() {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ bgcolor: "#2e425c", mb: 4, boxShadow: "0 4px 18px #2e425c15" }}>
      <Toolbar sx={{ justifyContent: "center", gap: 4 }}>
        <BlurOnIcon sx={{ mr: 3, fontSize: 28, color: "#fff" }} />
        <Stack direction="row" spacing={3} alignItems="center">
          <NavLinkMUI to="/" current={location.pathname === "/"}>
            Produits
          </NavLinkMUI>
          <NavLinkMUI to="/analyse" current={location.pathname === "/analyse"}>
            Analyse d'ingrédients
          </NavLinkMUI>
          <NavLinkMUI to="/scan" current={location.pathname === "/scan"}>
            Scanner un code-barres
          </NavLinkMUI>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

function NavLinkMUI({ to, current, children }) {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        color: current ? "#66f" : "#fff",
        fontWeight: 700,
        fontSize: 17,
        textTransform: "none",
        borderBottom: current ? "2.5px solid #66f" : "2.5px solid transparent",
        borderRadius: 0,
        px: 1.5,
        '&:hover': {
          background: "rgba(255,255,255,0.06)",
          color: "#aaf"
        }
      }}
      disableRipple
    >
      {children}
    </Button>
  );
}
