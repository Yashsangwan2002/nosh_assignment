//import React from "react";
import RestaurantCard from "./RestaurantCard";
import { sortRestaurants } from "../utilities";
import PropTypes from "prop-types";

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
RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      is_delivering_now: PropTypes.bool.isRequired,
      average_rating: PropTypes.number.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
      average_price_range: PropTypes.number.isRequired,
      promotion_status: PropTypes.bool,
      offers: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default RestaurantsList;
