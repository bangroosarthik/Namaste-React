import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header=()=>{
    const [loginbtn,setloginbtn]=useState("Login");
    return (
        <div className="Header">
            <div className="logo">
                <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <Link to={"/Home"}><li>Home</li></Link>
                <Link to={"/about"}><li>About Us</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
                <li>Cart</li>
                <button className="lgn-btn" onClick={()=>{
                    if(loginbtn=="Login"){
                        alert("Welcome to the main Page!");
                        setloginbtn("Logout");
                    }
                    else{
                        alert("You have been Logged out!");
                        setloginbtn("Login");
                    }
                }}>{loginbtn}</button>
            </div>
        </div>
    )
}

export default Header;