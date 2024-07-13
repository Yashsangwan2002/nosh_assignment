import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import io from 'socket.io-client';

const toggleDish = async (dishId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/dishes/toggle/${dishId}`, {
      method: 'PATCH',
    });
    return response.json();
  } catch (error) {
    console.error("Failed to toggle dish status:", error);
  }
};

const RestaurantCard = ({ dish }) => {
  const [isPublished, setIsPublished] = useState(dish.isPublished);

  const handleToggle = async () => {
    const updatedDish = await toggleDish(dish.dishId);
    setIsPublished(updatedDish.isPublished);
    onToggle(updatedDish);
  };

  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('dishUpdated', updatedDish => {
      if (updatedDish.dishId === dish.dishId) {
        setIsPublished(updatedDish.isPublished);
      }
    });

    return () => socket.disconnect();
  }, [dish.dishId]);

  return (
    <div className={`rounded-lg shadow-md overflow-hidden ${isPublished ? 'bg-white' : 'bg-gray-300'}`}>
      <img src={dish.imageUrl} alt={dish.dishName} className="w-full h-48 object-cover" />
      <div className={`p-4 ${isPublished ? '' : 'opacity-50'}`}>
        <h2 className="text-xl font-semibold mb-2">{dish.dishName}</h2>
        <p className="text-gray-600 mb-2">{dish.cuisine}</p>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded ${isPublished ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
        >
          {isPublished ? "Unpublish" : "Publish"}
        </button>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  dish: PropTypes.shape({
    dishId: PropTypes.string.isRequired,
    dishName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isPublished: PropTypes.bool.isRequired,
    cuisine: PropTypes.string.isRequired,
  }).isRequired,
};

export default RestaurantCard;
