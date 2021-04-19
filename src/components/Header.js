import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const URLArray = ['/frommenu', '/pizzaperso', '/favpizza'];
  console.log(location);
  return (
    <header>
      <nav>
        <ul>
          {URLArray.includes(location.pathname) ? (
            <>
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
            </>
          ) : (
            <>
              <li>
                <NavLink exact to="/" id="logo">
                  U pizz'
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/pizzaperso" className="menuItems">
                  Commander
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/login" className="menuItems">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact" className="menuItems">
                  Contact/About
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
