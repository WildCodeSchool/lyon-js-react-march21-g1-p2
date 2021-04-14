import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import React from 'react';

export default function Header() {
  // const location = useLocation();
  // const URLArray = ['/frommenu', '/pizzaperso', '/favpizza'];
  const logoStyle = {
    'font-family': 'var(--logo-font)',
    'font-size': '35px',
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-#e9c896 navbar-dark">
        <NavLink className="navbar-brand" style={logoStyle} exact to="/">
          U'Pizz
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Commander
            </NavLink>
            <div className="dropdown-menu">
              <NavLink className="dropdown-item" to="/frommenu">
                Les pizzas du menu
              </NavLink>
              <NavLink className="dropdown-item" to="/favpizza">
                Mes pizzas favorites
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink exact to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact" className="nav-link">
              Contact/About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
