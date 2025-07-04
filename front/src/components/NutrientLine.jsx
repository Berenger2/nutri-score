import { Stack, Typography, Chip } from "@mui/material";

export default function NutrientLine({ icon, label, value, unit }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.2}>
      {icon}
      <Typography sx={{ minWidth: 110, color: "#445", fontWeight: 500 }} variant="body2">
        {label}
      </Typography>
      <Typography sx={{ fontWeight: 700, color: "#204768", minWidth: 46 }}>
        {value ?? "?"}
      </Typography>
      <Chip
        label={unit}
        size="small"
        sx={{
          bgcolor: "#f5f7fb",
          color: "#89a",
          fontWeight: 600,
          fontSize: 13,
          height: 22,
          ml: 0.5
        }}
      />
    </Stack>
  );
}
