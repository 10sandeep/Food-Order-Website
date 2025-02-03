import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnnameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnnameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnnameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
