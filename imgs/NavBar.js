import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import MenuLogo from "./imgs/honey.png";

function NavBar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <NavLink exact to='/' className='nav-logo'>
          Sebastian
          <i className='fas fa-code'></i>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <NavLink
              exact
              to='/'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/table'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Table
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/blog'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Blog
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/contact'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          
          <img
            src={MenuLogo}
            alt='img logo'
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;