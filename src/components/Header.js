import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    return (
        <div className="Header">
            <div className="logo">
                <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </div>
        </div>
    )
}

export default Header;