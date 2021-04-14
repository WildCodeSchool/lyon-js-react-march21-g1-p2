import { NavLink } from 'react-router-dom';

export default function HeaderOrder() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" id="logo">
              U pizz'
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/frommenu" className="menuItems">
              Les pizzas du menu
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/favpizza" className="menuItems">
              Mes pizzas favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
