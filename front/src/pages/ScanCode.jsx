import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert
} from "@mui/material";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

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
    <Box sx={{ maxWidth: 420, mx: "auto", my: 7, px: 1 }}>
      <Paper elevation={3} sx={{
        borderRadius: 4,
        p: { xs: 2.5, md: 4 },
        textAlign: "center"
      }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <QrCodeScannerIcon sx={{ fontSize: 38, color: "#2e425c" }} />
        </Box>
        <Typography variant="h5" fontWeight={900} color="primary" gutterBottom>
          Scanner un code-barres
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2.5 }}>
          <TextField
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Ex : 3017620422003"
            variant="outlined"
            fullWidth
           
            autoFocus
            sx={{ mb: 1.5 }}
            error={!!error}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              fontWeight: 800,
              fontSize: 18,
              borderRadius: 2,
              py: 1.5,
              letterSpacing: "0.5px"
            }}
            
          >
            Scanner
          </Button>
        </Box>
        {error && (
          <Alert severity="error" sx={{ mb: 1.5 }}>{error}</Alert>
        )}
        <Typography color="text.secondary" fontSize={15}>
          Simulez un scan en saisissant un code produit.<br />
          Exemple : <b>3017620422003</b>
        </Typography>
      </Paper>
    </Box>
  );
}
