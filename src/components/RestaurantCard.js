import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,costForTwo,avgRating}=resData?.info;

    return (
        <div className="res-card">
            <div className="res-img">
                <img src={CDN_URL+resData.info.cloudinaryImageId} alt="res-img" />
            </div>
            <div className="res-info">
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h5>{resData.info.sla.slaString}</h5>
            </div>
            <div className="res-info2">
                <h5>{costForTwo}</h5>
                <h5>{avgRating}</h5>
                
            </div>
        </div>
    )
}

export default RestaurantCard;