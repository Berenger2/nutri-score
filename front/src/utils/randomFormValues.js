import FIELDS from "./fields";


function randomString(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}


export function randomNutriFormValues() {
  const values = {};
  for (const field of FIELDS) {
    if (field.type === "text") {
      values[field.name] = randomString(8);
    } else if (field.type === "number") {

      if (Math.random() < 0.7) {
        const min = field.min ?? 0;
        const max = field.max ?? 100;
        const isInt = Number.isInteger(min) && Number.isInteger(max) && !field.name.includes("fat");
        values[field.name] = isInt
          ? Math.floor(Math.random() * (max - min + 1)) + min
          : (Math.random() * (max - min) + min).toFixed(1);
      }
    }
  }
  return values;
}
