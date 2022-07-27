import React from "react";
import logo from "../../../Assets/Navbar/logo.png";
import avatar from "../../../Assets/Navbar/UserAvatar-signed.png";
import vector2 from "../../../Assets/Navbar/Vector-2.png";
import vector3 from "../../../Assets/Navbar/Vector-3.png";
import DarkMode from "../../../Components/Switch/SwitchMode";
import { NavLink } from "react-router-dom";
import "./Dash-NavBar.css";

const DashNavBar = () => {
  return (
    <>
      <div className="DashcontainerNavbar">
        <NavLink to={"/home"} className="Dashlink-navbar">
          <img src={logo} alt="logo" className="Dashlogo" />
        </NavLink>
        <div className="DashiconsContainer">
          <div className="Dashitem">
            <NavLink to={"/login"} className="Dashlink-navbar">
              <img src={vector3} alt="vector3" className="Dashicons" />
              <span>New Pet</span>
            </NavLink>
          </div>
          <div className="Dashitem">
            <NavLink to={"/login"} className="Dashlink-navbar">
              <img src={vector2} alt="vector2" className="Dashicons" />
              <span>My favorites</span>
            </NavLink>
          </div>
          <div className="Dashitem">
            <DarkMode />
          </div>
          <NavLink to={"/login"} className="Dashlink-navbar">
            <span className="DashuserName">Username </span>
            <img src={avatar} alt="avatar" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default DashNavBar;
