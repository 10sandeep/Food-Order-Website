import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
 import resList from "../utils/mockData";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState(resList);
  let [showButton, setShowButton] = useState(true);
  const filterRestaurantList = () => {
    const filteredRestaurant = restaurantList.filter(
      (res) => res.info.avgRating > 4
    );

    setRestaurantList(filteredRestaurant);
    setShowButton(false);
  };
  return (
    <div className="body">
      <div className="search-box">
        <CiSearch className="search-icon" />
        <input placeholder="Search for items..." />
      </div>
      <div className="filter">
        {
          showButton && (
          <button className="filter-btn" onClick={filterRestaurantList}>
            Top rated Restaurant
          </button>
        )}
      </div>

      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
