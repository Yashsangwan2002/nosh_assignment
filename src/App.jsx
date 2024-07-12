import { useEffect, useState } from "react";
import { getRestaurantsData } from "./api/resturants";
import RestaurantsSection from "./components/RestaurantsSection";
import Nav from "./components/Nav";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurantsData();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center ">
    <Nav/>
    <div className="max-w-[1024px] w-full">
      <RestaurantsSection restaurants={restaurants} />
    </div>
    </div>
  );
};

export default App;
