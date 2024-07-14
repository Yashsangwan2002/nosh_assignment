// import React from "react"; // You might need to import React if not already imported
import DishCard from "./DishCard"; // Corrected import
import { sortRestaurants } from "../utilities";
import PropTypes from "prop-types";

const DishesList = ({ dishes }) => {
  const sortedDishes = sortRestaurants(dishes); // Assuming `sortRestaurants` sorts dishes
  return (
    <div className="space-y-3">
      <h2>New Delhi Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {sortedDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(
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

export default DishesList;
