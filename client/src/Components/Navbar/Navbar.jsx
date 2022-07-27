import "../Navbar/Navbar.css";
import React from "react";
import logo from "../../Assets/Navbar/logo.png";
import es from "../../Assets/Navbar/ES.png";
import vector from "../../Assets/Navbar/Vector.png";
import vector2 from "../../Assets/Navbar/Vector-2.png";
import vector3 from "../../Assets/Navbar/Vector-3.png";
import DarkMode from "../../Components/Switch/SwitchMode";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="containerNavbar">
      <NavLink to={"/home"} className="link-navbar">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="iconsContainer">
        <div className="item">
          <img src={vector3} alt="vector3" className="icons" />
          <NavLink to={"/login"} className="link-navbar">
            <span>New Pet</span>
          </NavLink>
        </div>
        <div className="item">
          <img src={vector2} alt="vector2" className="icons" />
          <NavLink to={"/login"} className="link-navbar">
            <span>My favorites</span>
          </NavLink>
        </div>
        <div className="item">
          <DarkMode />
        </div>
        <div className="item">
          <span>ES</span>
          <img src={es} alt="vector" className="bandera" />
        </div>
        <NavLink to={"/login"} className="link-navbar">
          <img src={vector} alt="vector" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
