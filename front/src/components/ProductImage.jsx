import { Box } from "@mui/material";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

export default function ProductImage({ src, alt }) {
  const hasImage = Boolean(src);

  return (
    <Box
      sx={{
        width: 220,
        height: 220,
        bgcolor: "#f5f7fb",
        borderRadius: 4,
        boxShadow: "0 1px 8px #b5c6d729",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative"
        ,
        transition: "transform 0.18s",
        "&:hover": {
          transform: "scale(1.05)"
        }
      }}
    >
      {hasImage ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            background: "transparent",
            borderRadius: 4,
            display: "block"
          }}
        />
      ) : (
        <Box
          sx={{
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#b7bdd1"
          }}
        >
          <ImageNotSupportedIcon sx={{ fontSize: 56 }} />
           <Box sx={{ fontSize: 13, color: "#a5a9b8", mt: 1 }}>
            Image non disponible
          </Box>
        </Box>
      )}
    </Box>
  );
}
