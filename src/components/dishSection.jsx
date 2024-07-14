import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FilterRow from "./FilterRow";
import DishCard from "./dishCard"; // Corrected import

const DishesSection = ({ dishes }) => {
  const [filteredDishes, setFilteredDishes] = useState(dishes);

  useEffect(() => {
    setFilteredDishes(dishes);
    handleFilter({ selectedCuisine: "All" }); // Apply default filter on mount
  }, [dishes]);

  const handleFilter = (filters) => {
    let updatedDishes = dishes;
    if (filters?.selectedCuisine !== "All") {
      updatedDishes = dishes.filter((dish) =>
        dish?.cuisine?.includes(filters.selectedCuisine)
      );
    }
    setFilteredDishes(updatedDishes);
  };

  const handleToggle = (updatedDish) => {
    setFilteredDishes((prevDishes) =>
      prevDishes.map((dish) =>
        dish.dishId === updatedDish.dishId ? updatedDish : dish
      ).sort((a, b) => b.isPublished - a.isPublished)
    );
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <FilterRow handleFilter={handleFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.dishId} dish={dish} onToggle={handleToggle} />
          ))}
        </div>
      </div>
    </section>
  );
};

DishesSection.propTypes = {
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

export default DishesSection;
