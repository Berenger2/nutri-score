export function filterProducts(products, nutriscore, novascore, brand) {
  return products.filter(p => {
    const name = typeof p === "object"
      ? (p.product_name || p.nom || p.name || "")
      : (typeof p === "string" ? p.trim() : "");
    const nutri = p.nutriscore_grade && p.nutriscore_grade.toLowerCase() !== "unknown";
    const nutriOk = !nutriscore || (p.nutriscore_grade && p.nutriscore_grade.toUpperCase() === nutriscore);
    const novaOk = !novascore || (String(p.nova_group || "") === novascore);
    const brandOk = !brand || (p.brands && p.brands.toLowerCase().includes(brand.toLowerCase()));
    return name && nutri && nutriOk && novaOk && brandOk;
  });
}
