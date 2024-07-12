import { useState } from "react";
//import { FaSliders, FaArrowRightArrowLeft } from 'react-icons/fa6';
import PropTypes from "prop-types";

const FilterRow = ({ handleFilter }) => {
  const [activeCuisine, setActiveCuisine] = useState(0);

  // const filtersList = [
  //   { name: "Filters", icon: <FaSliders /> },
  //   { name: "Rating: 4.0+", icon: null },
  //   { name: "Safe and Hygienic", icon: null },
  //   { name: "Delivery Time", icon: <FaArrowRightArrowLeft /> },
  //   { name: "Cost", icon: null }
  // ];

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
    setActiveCuisine(index)
    handleFilter({
      selectedCuisine: cuisinesList[index]
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
      {/* <div className="flex flex-wrap gap-2">
        {filtersList.map((item) => (
          <button key={item.name} className="btn-primary border-gray-300 text-gray-400 p-2 flex items-center">
            {item.icon && <span className="mr-1">{item.icon}</span>}
            {item.name}
          </button>
        ))}
      </div> */}
    </div>
  );
};

// PropTypes validation
FilterRow.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterRow;
