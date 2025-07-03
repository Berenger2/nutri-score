import { BASE_URL } from "../config";

export async function getAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return await res.json();
}

export async function searchProduct(text) {
  const res = await fetch(`${BASE_URL}/product/search/${encodeURIComponent(text)}`);
  return await res.json();
}

export async function getProductByCode(code) {
  const res = await fetch(`${BASE_URL}/product/${code}`);
  return await res.json();
}

export async function analyzeIngredients(text, lang = "fr") {
  const res = await fetch(`${BASE_URL}/analysis?text=${encodeURIComponent(text)}&lang=${lang}`);
  return await res.json();
}
