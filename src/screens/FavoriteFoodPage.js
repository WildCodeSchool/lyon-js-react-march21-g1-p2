import { NavLink, useLocation } from 'react-router-dom';
// import CustomizedFoodPage from './CustomizedFoodPage';

let previousPath = '';

export default function FavoriteFoodPage() {
  const location = useLocation();
  previousPath = location.pathname;
  console.log(previousPath);

  const selectedIngredients = [
    ['Tomate', 5],
    ['Chorizo', 2],
  ];
  return (
    <>
      <p>FavoriteFoodPage</p>
      <button type="button">
        <NavLink
          to={{
            pathname: '/pizzaperso',
            state: {
              selectIngredients: selectedIngredients,
              prevPath: previousPath,
            },
          }}
        >
          Go to custom
        </NavLink>
      </button>
    </>
  );
}
