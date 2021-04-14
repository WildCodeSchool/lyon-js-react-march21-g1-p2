/* eslint-disable prettier/prettier */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

// eslint-disable-next-line no-unused-vars
export default (props) => {
  const location = useLocation();
  const URLArray = ['/frommenu', '/pizzaperso', '/favpizza'];

  return (
    <Menu>
      {URLArray.includes(location.pathname) ? (
        <>
          <li>
            <NavLink exact to="/" className="menu-item">
              U pizz'
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/frommenu" className="menu-item">
              Les pizzas du menu
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/favpizza" className="menu-item">
              Mes pizzas favorites
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink exact to="/" className="menu-item">
              U pizz'
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pizzaperso" className="menu-item">
              Commander
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/login" className="menu-item">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="menu-item">
              Contact/About
            </NavLink>
          </li>
        </>
      )}
    </Menu>
  );
};
