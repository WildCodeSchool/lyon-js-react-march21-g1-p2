import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import API from '../APIClient';

import pizzabox from '../assets/pizzabox.png';
import PizzaChange from '../components/PizzaChange';
import {
  // ingrForRequests,
  initialIngredientsList,
} from '../components/IngredientsBase';

require('dotenv').config();

const { CancelToken } = axios;

// const populateingredients = (array) => {
//   return array.map((ingredient) => {
//     return axios
//       .get(
//         `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_SECRET_API_KEY}&category=generic-foods&ingr=${ingredient.ingr}`
//       )
//       .then((response) => response.data)
//       .then((data) => {
//         return {
//           ...ingredient,
//           kcal100: data.parsed[0].food.nutrients.ENERC_KCAL,
//           quantity: 0,
//         };
//       });
//   });
// };

const ingredientsList = [...initialIngredientsList];

export default function CustomizedFoodPage() {
  // const [ingredientsListDB, setIngredientsListDB] = useState([]);
  const [ingredientsKcal, setIngredientsKcal] = useState([]);
  const [error, setError] = useState('');
  const [loadingIngredientsListDB, setLoadingIngredientsListDB] = useState(
    false
  );

  // const location = useLocation();

  const [chosenIngredientsList, setChosenIngredientsList] = useState(
    ingredientsList
  );

  const handleError = (err) => {
    if (!axios.isCancel(err))
      setError(
        'We were not able to recover the data, sorry for the inconvenience'
      );
  };

  useEffect(() => {
    const source = CancelToken.source();
    setLoadingIngredientsListDB(true);
    console.log('loadingIngredientsListDB  ', loadingIngredientsListDB);

    API.get('/order/create-pizza', { cancelToken: source.token })
      .then((res) => setIngredientsKcal(res.data))
      .catch(handleError)
      .finally(() => {
        if (
          !(
            source.token.reason &&
            source.token.reason.message === 'request cancelled'
          )
        )
          setLoadingIngredientsListDB(false);
      });
    return () => {
      source.cancel('request cancelled');
    };
  }, []);

  // const selectedIngredients =
  //   location.state != null ? location.state.selectIngredients : [];

  // using Webpack require.context to dynamically import images
  const requestImageFile = require.context('../assets', true, /.*/);

  /* Execution of the request to the API */
  // useEffect(() => {
  //   Promise.all(populateingredients(ingrForRequests)).then((newingredients) => {
  //     setIngredientsKcal(newingredients);
  //   });
  // }, []);

  /* ************************************************************************ */

  /* Construction of the basic list of ingredients (= at least pizza dough + tomato sauce if "customization from scratch"
     +/- the ingredients selected by the predefined pizza, if they exist) */
  // useEffect(() => {
  //   if (ingredientsKcal.length > 0) {
  //     const selectedIngredkcal = selectedIngredients.map((ingred) => {
  //       const ingredToSelect = ingredientsKcal.find(
  //         (ingredientKcal) => ingredientKcal.name === ingred[0]
  //       );

  //       return {
  //         id: ingredToSelect.id,
  //         name: ingredToSelect.name,
  //         imgsrc: ingredToSelect.imglayer,
  //         quantity: ingred[1],
  //         serving: ingredToSelect.serving,
  //         kcal100: ingredToSelect.kcal100,
  //         price: ingredToSelect.price,
  //       };
  //     });
  //     console.log('selectedIngredkcal   ', selectedIngredkcal);
  //     setChosenIngredientsList((IngredientsList) => [
  //       ...IngredientsList,
  //       ...selectedIngredkcal,
  //     ]);
  //   }
  // }, [ingredientsKcal]);

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
    console.log('handleChangeQuantity   ');
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

  console.log(error);
  console.log('loadingIngredientsListDB end   ', loadingIngredientsListDB);
  console.log(ingredientsKcal);
  console.log(ingredientsList);

  return (
    <div>
      <div className="pizza-with-ingredients">
        <div className="mx-4 flex justify-center flex-col items-center">
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

          <PizzaChange {...chosenIngredientsList} />
        </div>
        {error && <h3>{error}</h3>}
        {loadingIngredientsListDB ? (
          <div className="flex justify-center  pt-3">Loading in progress</div>
        ) : (
          <ul className="ingredientsList">
            <li>Test</li>
            {ingredientsKcal
              .filter(
                (ingredient, index) =>
                  ingredient[index].category === 'Ingredient'
              )
              .map((ingr) => (
                <li key={ingr.id} className="ingredient">
                  <div className="mb-1 font-bold text-2xl text-center">
                    {ingr.name}
                  </div>
                  <button
                    type="button"
                    className="m-auto w-full"
                    onClick={() => handleChangeQuantity(ingr.id, 'add')}
                  >
                    <img
                      id={ingr.id}
                      src={requestImageFile(`./${ingr.imgsrc}`).default}
                      alt={ingr.name}
                      className="sm:w-24 w-16 m-auto"
                    />
                  </button>
                  <div className="mt-1 font-bold text-l text-center">
                    1 Portion :
                  </div>
                  <div className="text-l text-center">
                    {`${ingr.serving} g - ${
                      (ingr.kcal100 * ingr.serving) / 100
                    } kcal - ${ingr.price} €`}
                  </div>

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
        )}
      </div>
    </div>
  );
}
