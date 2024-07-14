import { useState } from "react";
import PropTypes from "prop-types";

const FilterRow = ({ handleFilter }) => {
  const [activeCuisine, setActiveCuisine] = useState(0);

  const cuisinesList = [
    "All",
    "North Indian",
    "Mexican",
    "Italian",
    "American",
    "Cafe",
    "Continental",
    "Chinese",
  ];

  const setFilter = (index) => {
    setActiveCuisine(index);
    handleFilter({
      selectedCuisine: cuisinesList[index],
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2>Sort by Cuisine</h2>
        <div className="flex flex-wrap gap-2 overflow-x-auto cuisine-container w-full">
          {cuisinesList.map((cuisineName, index) => (
            <button
              key={cuisineName}
              className={`p-2 flex-shrink-0 flex items-center text-gray-400 rounded-xl ${
                activeCuisine !== index ? "border border-gray-300" : "bg-black text-white"
              }`}
              onClick={() => setFilter(index)}
            >
              <p>{cuisineName}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

FilterRow.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterRow;
