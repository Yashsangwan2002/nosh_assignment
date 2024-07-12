import { useState } from "react";
import RestaurantsList from "./RestaurantsList";
import PropTypes from "prop-types";
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


RestaurantsSection.propTypes = {
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


export default RestaurantsSection;
