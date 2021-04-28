import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import axios from 'axios';
import pizzabox from '../assets/pizzabox.png';

import {
  ingrForRequests,
  initialIngredientsList,
} from '../components/IngredientsBase';

import PizzaChange from '../components/PizzaChange';

require('dotenv').config();

const populateingredients = (array) => {
  return array.map((ingredient) => {
    return axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_SECRET_API_KEY}&category=generic-foods&ingr=${ingredient.ingr}`
      )
      .then((response) => response.data)
      .then((data) => {
        return {
          ...ingredient,
          kcal100: data.parsed[0].food.nutrients.ENERC_KCAL,
          quantity: 0,
        };
      });
  });
};

const ingredientsList = [...initialIngredientsList];

export default function CustomizedFoodPage() {
  const location = useLocation();

  const [ingredientsKcal, setIngredientsKcal] = useState([]);
  const [chosenIngredientsList, setChosenIngredientsList] = useState(
    ingredientsList
  );
  const selectedIngredients =
    location.state != null ? location.state.selectIngredients : [];

  /* Execution of the request to the API */
  useEffect(() => {
    Promise.all(populateingredients(ingrForRequests)).then((newingredients) => {
      setIngredientsKcal(newingredients);
    });
  }, []);

  /* Construction of the basic list of ingredients (= at least pizza dough + tomato sauce if "customization from scratch"
     +/- the ingredients selected by the predefined pizza, if they exist) */
  useEffect(() => {
    if (ingredientsKcal.length > 0) {
      const selectedIngredkcal = selectedIngredients.map((ingred) => {
        const ingredToSelect = ingredientsKcal.find(
          (ingredientKcal) => ingredientKcal.name === ingred[0]
        );

        return {
          id: ingredToSelect.id,
          name: ingredToSelect.name,
          imgsrc: ingredToSelect.imglayer,
          quantity: ingred[1],
          serving: ingredToSelect.serving,
          kcal100: ingredToSelect.kcal100,
          price: ingredToSelect.price,
        };
      });
      setChosenIngredientsList((IngredientsList) => [
        ...IngredientsList,
        ...selectedIngredkcal,
      ]);
    }
  }, [ingredientsKcal]);

  /* Updating the rendering of the quantity of each ingredient */
  const setServingQuantity = (ingredientId) => {
    const ingredExists = chosenIngredientsList.filter(
      (ingred) => ingred.id === ingredientId
    );

    return ingredExists.length > 0 ? (
      <span>{ingredExists[0].quantity} </span>
    ) : (
      <span>0 </span>
    );
  };

  /* */
  const handleChangeQuantity = (id, operator) => {
    const ingredToUpdate = chosenIngredientsList.filter(
      (ingred) => ingred.id === id
    );
    const currentQuantity =
      ingredToUpdate.length === 0 ? 0 : ingredToUpdate[0].quantity;

    if (operator === 'add') {
      if (ingredToUpdate.length === 0) {
        const ingredToAdd = ingredientsKcal.filter(
          (ingred) => ingred.id === id
        );
        setChosenIngredientsList((IngredientsList) => [
          ...IngredientsList,
          {
            id: ingredToAdd[0].id,
            name: ingredToAdd[0].name,
            imgsrc: ingredToAdd[0].imglayer,
            quantity: 1,
            serving: ingredToAdd[0].serving,
            kcal100: ingredToAdd[0].kcal100,
          },
        ]);
      } else {
        setChosenIngredientsList(
          chosenIngredientsList.map((currentIngredient) =>
            currentIngredient.id === ingredToUpdate[0].id
              ? {
                  ...currentIngredient,
                  quantity: currentIngredient.quantity + 1,
                }
              : currentIngredient
          )
        );
      }
    } else if (operator === 'remove') {
      if (currentQuantity > 1) {
        setChosenIngredientsList(
          chosenIngredientsList.map((currentIngredient) =>
            currentIngredient.id === ingredToUpdate[0].id
              ? {
                  ...currentIngredient,
                  quantity: currentIngredient.quantity - 1,
                }
              : currentIngredient
          )
        );
      } else if (currentQuantity === 1) {
        const cleanedingredients = chosenIngredientsList.filter(
          (ingred) => ingred.id !== id
        );
        setChosenIngredientsList(cleanedingredients);
      }
    }
  };

  return (
    <div>
      <NavLink
        to={{
          pathname: '/order/confirmation',
          state: {
            chosenIngredientsList,
          },
        }}
      >
        <button
          className="bg-yellow-800 hover:bg-red-600 text-gray-200 font-bold py-2 px-4 border border-gray-400 rounded shadow inline-flex justify-center "
          type="button"
        >
          <img src={pizzabox} alt="pizzabox" className="h-6 w-6 mr-2" />
          Ajouter au panier
        </button>
      </NavLink>

      <div className="m-auto">
        <PizzaChange {...chosenIngredientsList} />
      </div>

      <ul className="ingredientsList">
        {ingredientsKcal
          .filter((ingredient) => ingredient.category === 'Ingredient')
          .map((ingr) => (
            <li key={ingr.id} className="ingredient">
              <div className="m-6 font-bold text-2xl text-center">
                {ingr.name}
              </div>
              <button
                type="button"
                className="m-auto w-full"
                onClick={() => handleChangeQuantity(ingr.id, 'add')}
              >
                <img
                  id={ingr.id}
                  src={ingr.imgsrc}
                  alt={ingr.name}
                  className="sm:w-48 w-28 m-auto"
                />
              </button>
              <div className="mt-4 font-bold text-l text-center">
                Portion : {ingr.serving}g
              </div>
              <div className="text-l text-center">
                {(ingr.kcal100 * ingr.serving) / 100} kcal par portion
              </div>
              <div className="text-l text-center">{ingr.price}€ la portion</div>
              <div className="text-l text-center">
                <button
                  id={ingr.id}
                  type="button"
                  className="bg-green-500 text-white font-bold w-8 h-8 m-2 rounded"
                  onClick={() => handleChangeQuantity(ingr.id, 'add')}
                >
                  +
                </button>
                {setServingQuantity(ingr.id)}
                portion(s)
                <button
                  type="button"
                  className="bg-red-500 text-white font-bold w-8 h-8 m-2 rounded"
                  onClick={() => handleChangeQuantity(ingr.id, 'remove')}
                >
                  -
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
