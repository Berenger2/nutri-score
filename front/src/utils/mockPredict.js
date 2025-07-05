export async function mockPredictNutriscore(inputData) {
  await new Promise(res => setTimeout(res, 800));
  return { nutriscore_grade: ["A", "B", "C", "D", "E"][Math.floor(Math.random() * 5)] };
}