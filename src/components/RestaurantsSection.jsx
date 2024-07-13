import { useState } from "react";
import PropTypes from "prop-types";
import FilterRow from "./FilterRow";
import RestaurantCard from "./RestaurantCard";

const RestaurantsSection = ({ dishes }) => {
  const [filteredDishes, setFilteredDishes] = useState(dishes);

  const handleFilter = (filters) => {
    if (filters?.selectedCuisine === "All") {
      setFilteredDishes(dishes);
    } else {
      setFilteredDishes(
        dishes?.filter((dish) =>
          dish?.cuisine?.includes(filters.selectedCuisine)
        )
      );
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <FilterRow handleFilter={handleFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredDishes.map((dish) => (
            <RestaurantCard key={dish.dishId} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

RestaurantsSection.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      dishId: PropTypes.string.isRequired,
      dishName: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      isPublished: PropTypes.bool.isRequired,
      cuisine: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RestaurantsSection;