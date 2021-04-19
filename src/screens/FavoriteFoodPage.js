import { NavLink, useLocation } from 'react-router-dom';
import CustomizedFoodPage from './CustomizedFoodPage';

export default function FavoriteFoodPage() {
  const location = useLocation();
  const goToPreviousPath = location.pathname;
  console.log(goToPreviousPath);

  const selectedIngredients = [''];
  return (
    <>
      <p>FavoriteFoodPage</p>
      <button type="button" onClick={goToPreviousPath}>
        <NavLink to="/pizzaperso">Go to custom</NavLink>
      </button>
      <CustomizedFoodPage
        selectedIngredients={selectedIngredients}
        previouspath={goToPreviousPath}
      />
    </>
  );
}
