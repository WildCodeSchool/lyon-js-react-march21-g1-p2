/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  const [isRotated, setIsRotated] = React.useState(false);
  const onRotate = () => setIsRotated((rotated) => !rotated);

  return (
    <div
      className={`Card sm:bg-yellow-100 mb-6 ${isRotated ? 'rotated' : ''}`}
      onClick={onRotate}
    >
      <div className="cardfront bg-yellow-100">
        <img
          src={requestImageFile(`./${image}`).default}
          alt={name}
          className="preset-pizza max-w-xs"
        />
      </div>
      <div className="cardback bg-yellow-100 text-center items-center m-auto">
        <div className="text-yellow-900 font-bold text-2xl text-center">
          {name}
        </div>
        <div className="Ingredients italic text-m m-auto">
          {listOfSelectedIndredients
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
        <div className="Button text-center m-auto ">
          <div>
            <NavLink
              to={{
                pathname: '/order/confirmation',
                state: {
                  dataForConfirmation,
                },
              }}
            >
              <button
                className="order-btn bg-yellow-800 hover:bg-red-600 text-gray-200 font-bold py-2 px-4 border border-gray-400 rounded shadow inline-flex justify-center "
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
          </div>
          <div>
            <NavLink
              to={{
                pathname: '/order/create-pizza',
                state: {
                  selectIngredients: listOfSelectedIndredients,
                },
              }}
            >
              <button
                className="mt-2 bg-yellow-800 hover:bg-yellow-500 text-gray-200 hover:text-red-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4 w-58"
                type="button"
              >
                Personnaliser la pizza
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaComposition;
