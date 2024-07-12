export function sortRestaurants(restaurants = []) {
    let closedRestaurants = [];
    let openRestaurants = [];
  
    restaurants.forEach((restaurant) => {
      if (restaurant.is_delivering_now) openRestaurants.push(restaurant);
      else closedRestaurants.push(restaurant);
    });
  
    let sortedOpenRestaurants = openRestaurants.sort((a, b) => {
      // Promoted restaurants come before non-promoted restaurants
      if (a.promotion_status && !b.promotion_status) {
        return -1; // a comes before b
      } else if (!a.promotion_status && b.promotion_status) {
        return 1; // b comes before a
      } else {
        return 0; // No change in order
      }
    });
  
    return [...sortedOpenRestaurants, ...closedRestaurants];
  }
  