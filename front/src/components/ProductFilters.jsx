import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

export default function ProductFilters({
  nutriscore,
  setNutriscore,
  novascore,
  setNovascore,
  brand,
  setBrand,
  only,
}) {
  if (only === "nutriscore") {
    return (
      <FormControl fullWidth>
        <InputLabel id="nutriscore-label">Nutri-Score</InputLabel>
        <Select
          sx={{ minWidth: 200 }}
          labelId="nutriscore-label"
          value={nutriscore}
          label="Nutri-Score"
          onChange={(e) => setNutriscore(e.target.value)}
          size="small"
        >
          <MenuItem value="">Tous Nutri-Scores</MenuItem>
          <MenuItem value="A">Nutri-Score A</MenuItem>
          <MenuItem value="B">Nutri-Score B</MenuItem>
          <MenuItem value="C">Nutri-Score C</MenuItem>
          <MenuItem value="D">Nutri-Score D</MenuItem>
          <MenuItem value="E">Nutri-Score E</MenuItem>
        </Select>
      </FormControl>
    );
  }
  if (only === "novascore") {
    return (
      <FormControl fullWidth>
        <InputLabel id="novascore-label">NOVA Score</InputLabel>
        <Select
        sx={{ minWidth: 200 }}
          labelId="novascore-label"
          value={novascore}
          label="NOVA Score"
          onChange={(e) => setNovascore(e.target.value)}
          size="small"
          
        >
          <MenuItem value="">Tous Nova Scores</MenuItem>
          <MenuItem value="1">NOVA 1</MenuItem>
          <MenuItem value="2">NOVA 2</MenuItem>
          <MenuItem value="3">NOVA 3</MenuItem>
          <MenuItem value="4">NOVA 4</MenuItem>
        </Select>
      </FormControl>
    );
  }
  if (only === "brand") {
    return (
      <TextField
      sx={{ minWidth: 200 }}
        fullWidth
        label="Filtrer par marque"
        variant="outlined"
        size="small"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
    );
  }

  return null;
}
