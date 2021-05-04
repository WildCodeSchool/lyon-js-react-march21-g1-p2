import React from 'react';
import { NavLink } from 'react-router-dom';
import pizzabox from '../assets/pizzabox.png';

// using Webpack require.context to dynamically import images from the names of files recorded in the database
const requestImageFile = require.context('../assets', true, /.*/);

const PizzaComposition = ({
  name,
  selectedIngredients,
  nutrition,
  image,
  price,
}) => {
  const dataForConfirmation = {
    ingredients: selectedIngredients,
    price,
    quantity: 1,
  };

  const listOfSelectedIndredients = Object.entries(
    JSON.parse(selectedIngredients)
  ).slice(2, Object.entries(JSON.parse(selectedIngredients)).length);

  return (
    <div className="Cards">
      <div className="Card">
        <figure className="PizzaList flex flex-row bg-yellow-100 m-4 items-center">
          <img
            src={requestImageFile(`./${image}`).default}
            alt={name}
            className="max-w-xs m-auto pb-3"
          />
          <figcaption className="Figcaption flex flex-col text-center items-center m-auto">
            <div className="text-yellow-900 font-bold text-2xl text-center">
              {name}
            </div>
            <div className="Ingredients italic text-m text-center m-auto">
              {Object.entries(JSON.parse(selectedIngredients))
                .reduce(
                  (listOfIngredients, ingredient) =>
                    `${listOfIngredients} ${ingredient[0]},`,
                  ''
                )
                .replace(/,\s*$/, '')}
            </div>
            <div className="text-s text-center pb-1">{nutrition} kcal</div>
            <div className="font-bold italic text-s pb-2 pt-2">
              {price % 1 === 0 ? price : price.toFixed(2)} €
            </div>

            <div className="Button flex flex-col text-center m-auto">
              <NavLink
                to={{
                  pathname: '/order/confirmation',
                  state: {
                    dataForConfirmation,
                  },
                }}
              >
                <button
                  className="bg-yellow-800 hover:bg-red-600 text-gray-200 font-bold py-2 px-4 border border-gray-400 rounded shadow inline-flex justify-center "
                  type="button"
                >
                  <img
                    src={pizzabox}
                    alt="pizzabox"
                    className="h-6 w-6 mr-2 pl-0"
                  />
                  Commander
                </button>
              </NavLink>

              <NavLink
                to={{
                  pathname: '/order/create-pizza',
                  state: {
                    selectIngredients: listOfSelectedIndredients,
                  },
                }}
              >
                <button
                  className="mt-2 bg-yellow-800 hover:bg-yellow-500 text-gray-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4 p-6"
                  type="button"
                >
                  Personnaliser la pizza
                </button>
              </NavLink>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default PizzaComposition;
