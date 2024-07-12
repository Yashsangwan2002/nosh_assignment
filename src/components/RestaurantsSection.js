import React, { useState } from "react";
import RestaurantsList from "./RestaurantsList";
import FilterRow from "./FilterRow";

const RestaurantsSection = ({ restaurants }) => {
  const [filteredRestaurantsData, setFilteredRestaurantsData] = useState(restaurants);

  const handleFilter = (filters) => {
    if (filters?.selectedCuisine === "All") {
      setFilteredRestaurantsData(restaurants);
    } else {
      setFilteredRestaurantsData(
        restaurants?.filter((restaurant) =>
          restaurant?.cuisines?.includes(filters.selectedCuisine)
        )
      );
    }
  };

  return (
    <div className="space-y-4 relative p-2">
      <div>
        <FilterRow handleFilter={handleFilter} />
      </div>
      <RestaurantsList restaurants={filteredRestaurantsData} />
    </div>
  );
};

export default RestaurantsSection;
