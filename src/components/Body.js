import { CiSearch } from "react-icons/ci";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search-box">
          <CiSearch className="search-icon" />
          <input placeholder="Search for items..." />
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