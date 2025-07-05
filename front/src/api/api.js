import { BASE_URL } from "../config";

export async function getAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  return Array.isArray(data.products) ? data.products : [];
}

export async function searchProduct(text) {
  const res = await fetch(`${BASE_URL}/product/search/${encodeURIComponent(text)}`);
  const data = await res.json();
  return Array.isArray(data.products) ? data.products : [];
}

export async function getProductByCode(code) {
  const res = await fetch(`${BASE_URL}/product/${code}`);
  return await res.json();
}

export async function analyzeIngredients(text, lang = "fr") {
  const res = await fetch(`${BASE_URL}/analysis?text=${encodeURIComponent(text)}&lang=${lang}`);
  return await res.json();
}


export async function predictNutriscore(inputData) {
  const res = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData)
  });
  if (!res.ok) throw new Error("Erreur API");
  return await res.json();
}
