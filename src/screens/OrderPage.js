import { BtnLink } from '../components/Navbar/NavbarElements';
import './order.css';

const favoritePizza = 'Vos Pizzas Favorites';
const createPizza = 'Créez votre pizza';
const ourPizza = 'Nos Pizzas';

export default function OrderPage() {
  return (
    <div className="stylingInFlex">
      <BtnLink className="stylingOrderButton" to="/order/fav-pizza">
        {favoritePizza}
      </BtnLink>
      <BtnLink className="stylingOrderButton" to="/order/create-pizza">
        {createPizza}
      </BtnLink>
      <BtnLink className="stylingOrderButton" to="/order/pizza-list">
        {ourPizza}
      </BtnLink>
    </div>
  );
}
