//import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const partialStar = rating - fullStars;

  return (
    <div className="flex gap-1 items-center ">
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon
            className="bg-[#d0474a] mx-[0.13rem] rounded-sm py-[0.05rem] px-[0.1rem]"
            width={12}
            height={12}
            key={index}
            icon={faStar}
            color="#FFFFFF"
          />
        ))}
        {partialStar > 0 && (
          <FontAwesomeIcon
            className="bg-gray-400 mx-[0.2rem] rounded-sm p-[0.08rem]"
            width={12}
            height={12}
            key="partial"
            icon={faStar}
            color="#FFFFFF"
            style={{ opacity: partialStar }}
          />
        )}
      </div>
      <span className="text-xs font-semibold text-gray-500">{rating}(875 delivery reviews)</span>
    </div>
  );
};


Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};


const RestaurantCard = ({ restaurant }) => {
  return (
    <div
      className={`rounded-lg md:w-[320px] md:h-[380px] space-y-1 cursor-pointer scale-100 transition hover:scale-[1.01] hover:shadow-lg p-2  ${
        !restaurant.is_delivering_now && "grayscale opacity-50"
      }`}
    >
      <div className="relative w-full h-56">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={restaurant.photo}
          alt={restaurant.name}
        />
        {restaurant.is_delivering_now ? (
          <span className="absolute z-10 bg-blue-400 text-white bottom-6 rounded-r-md px-1">
            {restaurant.offers[0]}
          </span>
        ) : (
          <span className="absolute z-10 bg-blue-400 text-white bottom-6 rounded-r-md px-1">
            Closed
          </span>
        )}
      </div>
      <div className="space-y-1 p-1">
        <div className="flex flex-col justify-between">
          <h3 className="text-gray-700 truncate">{restaurant.name}</h3>
          <Rating rating={restaurant.average_rating} />
        </div>
        <p className="truncate text-gray-500 text-sm">
          {restaurant.cuisines.join(", ")}
        </p>
        <p className="text-gray-500 text-sm">{`₹${restaurant.average_price_range} per person`}</p>
        {restaurant.promotion_status && (
          <p className="text-gray-400">Promoted</p>
        )}
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    is_delivering_now: PropTypes.bool.isRequired,
    offers: PropTypes.arrayOf(PropTypes.string).isRequired,
    average_rating: PropTypes.number.isRequired,
    cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
    average_price_range: PropTypes.number.isRequired,
    promotion_status: PropTypes.bool,
  }).isRequired,
};

export default RestaurantCard;
