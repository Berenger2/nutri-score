import { Grid, TextField, Button } from "@mui/material";
import FIELDS from "../utils/fields";

export default function NutriScoreForm({ values, onChange, onSubmit, loading, disabled }) {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <Grid container spacing={2}>
        {FIELDS.map(field => (
          <Grid item xs={12} sm={6} key={field.name}>
            <TextField
              label={field.label}
              name={field.name}
              value={values[field.name] || ""}
              onChange={onChange}
              type={field.type}
              size="small"
              fullWidth
              inputProps={field.type === "number" ? { step: "any" } : {}}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        sx={{ fontWeight: 800, mt: 3, py: 1.2, fontSize: 18, borderRadius: 2 }}
        disabled={loading || disabled}
      >
        {loading ? "Calcul en cours..." : "Prédire"}
      </Button>
    </form>
  );
}
