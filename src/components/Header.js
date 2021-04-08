import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/frommenu">
              Les pizzas du menu
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pizzaperso">
              Ma pizza personnalisée
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/favpizza">
              Mes pizzas favorites
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              Contact/About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
