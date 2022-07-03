import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="wrapper">
          <ul>
            <li>Task Manager Platform</li>
            <div>
              <li>
                <NavLink to="/signup" activeclassname="active">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" activeclassname="active">
                  Login
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
