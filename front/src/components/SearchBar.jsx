import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ search, setSearch, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <Stack direction="row" spacing={1} alignItems="center" width="100%">
        <TextField
       
          fullWidth
          label="Recherche produit"
          value={search}
          onChange={e => setSearch(e.target.value)}
          size="small"
          variant="outlined"
          sx={{
            background: "#fafbfc",
            borderRadius: 1,
            minWidth: 700 
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          startIcon={<SearchIcon />}
          sx={{
            fontWeight: 700,
            borderRadius: 1.5,
            px: 5.5,
            py: 1.3,
            boxShadow: "none"
          }}
        >
          Rechercher
        </Button>
      </Stack>
    </form>
  );
}
