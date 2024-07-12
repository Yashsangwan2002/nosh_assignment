export async function getRestaurantsData() {
    try {
      const res = await fetch(`https://demo-x8ej.vercel.app/api/restaurants`);
      return res.json();
    } catch (error) {
      throw new Error("Failed to fetch restaurants data");
    }
  }
  