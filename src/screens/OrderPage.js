import { Link } from 'react-router-dom';
import './order.css';
import pizzaImgFav from '../assets/margarita.png';
import pizzaImgCreate from '../assets/pizzabox-btn.svg';
import pizzaImg from '../assets/regina.png';

const favoritePizza = 'Vos Pizzas Favorites';
const createPizza = 'Créez votre pizza';
const ourPizza = 'Nos Pizzas';

export default function OrderPage() {
  return (
    <section className="orderContainer">
      <ul className="orderGrid">
        <li className="orderGridCase">
          <Link className="orderImage" to="/order/pizza-list">
            <img
              className="orderImage"
              src={pizzaImg}
              alt="Vos Pizzas Favorites"
            />
            <h3 className="h3">{ourPizza}</h3>
          </Link>
        </li>
        <li className="orderGridCase">
          <Link className="orderImage" to="/order/fav-pizza">
            <img
              className="orderImage"
              src={pizzaImgFav}
              alt="Vos Pizzas Favorites"
            />
            <h3 className="h3">{favoritePizza}</h3>
          </Link>
        </li>
        <li className="orderGridCase">
          <Link className="orderImage" to="/order/create-pizza">
            <img
              className="orderImage"
              src={pizzaImgCreate}
              alt="Vos Pizzas Favorites"
            />
            <h3 className="h3">{createPizza}</h3>
          </Link>
        </li>
      </ul>
    </section>
  );
}
