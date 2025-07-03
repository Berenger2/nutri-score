export default function ProductImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: 220,
        height: 220,
        objectFit: "contain",
        background: "#f5f7fb",
        borderRadius: 14,
        boxShadow: "0 1px 6px #0002"
      }}
    />
  );
}
