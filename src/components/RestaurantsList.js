import React from "react";
import RestaurantCard from "./RestaurantCard";
import { sortRestaurants } from "../utilities";

const RestaurantsList = ({ restaurants }) => {
  const sortedRestaurants = sortRestaurants(restaurants);
  return (
    <div className="space-y-3">
      <h2>New Delhi Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {sortedRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
