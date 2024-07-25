import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
const Body=()=>{

    const [listofRestaurant,setListOfRestaurant]=useState(resList);
    function filterRestaurant(){
        const filteredRes=listofRestaurant.filter((res)=>{
            return res.info.avgRating>4;
        })
        setListOfRestaurant(filteredRes);
        
    }
    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="Search your Favourite dish or restaurant" />
                <button className="search-btn">Search</button>
                <div className="filter-container">
                    <button className="filter-btn" onClick={()=>{
                        filterRestaurant();
                    }}>Top Rated Restaurants</button>
                </div>
            </div>

            <hr style={{width:"50%" }}/>
            <div className="res-container">
                
                {listofRestaurant.map((res)=>{
                    return (
                        <RestaurantCard key={res.info.id} resData={res} />
                    )
                })}
            </div>
        </div>
    )
}
export default Body;