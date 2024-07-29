import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
import { useEffect, useState } from "react";
const Body=()=>{

    const [listofRestaurant,setListOfRestaurant]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [title,setTitle]=useState("Restaurants Menu");
    //api call
    useEffect(()=>{
        fetchData();
        console.log("use effect called");
    },[])


    const fetchData=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    //top Restaurants 
    function filterRestaurant(){
        const filteredRes=listofRestaurant.filter((res)=>{
            return res.info.avgRating>=4;
        })
        setFilteredRestaurant(filteredRes);
        console.log(listofRestaurant);


        if(title=="Restaurants Menu") {setTitle("Top Restaurants in your area 🚀 ")}
        else{
            setTitle("Restaurants Menu");
        }   
    }



    //search
    function filterSearchRestaurant(searchText,listofRestaurant){
        const searchFilter=listofRestaurant.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        })
        setFilteredRestaurant(searchFilter);
    }

    console.log("render component");
    return listofRestaurant.length===0 ? <ShimmerCard />: (
        <div>
            <div className="search-container">
                <input type="text" placeholder="Search your Favourite dish or restaurant" value={searchText} onChange={(ev)=>setSearchText(ev.target.value)} />
                <button className="search-btn" onClick={()=>{
                    //we want search text so first we need to bind local state variable to input 
                    filterSearchRestaurant(searchText,listofRestaurant);
                }}>Search</button>
                <div className="filter-container">
                    <button className="filter-btn" onClick={()=>{
                        filterRestaurant();
                        
                    }}>Top Rated Restaurants</button>
                </div>   
            </div>

            <hr style={{width:"50%" }}/>
            <h1 className="title">{title}</h1>
            <div className="res-container">
                
                {filteredRestaurant.map((res)=>{
                    return (
                        <RestaurantCard key={res.info.id} resData={res} />
                    )
                })}
            </div>
        </div>
    )
}
export default Body;