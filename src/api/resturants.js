export async function getDishesData() {
  try {
    const res = await fetch(`http://localhost:3000/api/dishes/`);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch dishes data");
  }
}
