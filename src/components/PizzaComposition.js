/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';
import pizzabox from '../assets/pizzabox.png';

const PizzaComposition = ({
  name,
  selectedIngredients,
  nutrition,
  image,
  price,
}) => {
  const [isRotated, setIsRotated] = React.useState(false);
  const onRotate = () => setIsRotated((rotated) => !rotated);
  return (
    <div
      className={`Card sm:bg-yellow-100 mb-6 ${isRotated ? 'rotated' : ''}`}
      onClick={onRotate}
    >
      <div className="cardfront bg-yellow-100">
        <img src={image} alt={name} className="preset-pizza max-w-xs" />
      </div>
      <div className="cardback bg-yellow-100 text-center items-center m-auto">
        <div className="text-yellow-900 font-bold text-2xl text-center">
          {name}
        </div>
        <div className="Ingredients italic text-m m-auto">
          {selectedIngredients
            .reduce(
              (listOfIngredients, ingredient) =>
                `${listOfIngredients} ${ingredient[0]},`,
              ''
            )
            .replace(/,\s*$/, '')}
        </div>
        <div className="text-s text-center pb-1">{nutrition}</div>
        <div className="font-bold italic text-s pb-2 pt-2">{price}</div>
        <div className="Button text-center m-auto">
          <button
            className="bg-yellow-800 hover:bg-red-600 text-gray-200 font-bold py-2 px-4 border border-gray-400 rounded shadow inline-flex justify-center "
            type="button"
          >
            <img src={pizzabox} alt="pizzabox" className="h-6 w-6 mr-2 pl-0" />
            Ajouter au panier
          </button>

          <NavLink
            className="block"
            to={{
              pathname: '/order/create-pizza',
              state: {
                selectIngredients: selectedIngredients,
              },
            }}
          >
            <button
              className="mt-2 bg-yellow-800 hover:bg-yellow-500 text-gray-200 hover:text-red-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4 p-6"
              type="button"
            >
              Personnaliser la pizza
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default PizzaComposition;
