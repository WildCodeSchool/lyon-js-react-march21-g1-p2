import React from 'react';
import { NavLink } from 'react-router-dom';
import pizzabox from '../assets/pizzabox.png';

const PizzaComposition = ({
  name,
  selectedIngredients,
  nutrition,
  image,
  price,
}) => (
  <div className="Cards">
    <div className="Card">
      <figure className="PizzaList flex flex-row bg-yellow-100 m-4">
        <img src={image} alt={name} className="max-w-xs m-auto pl-4" />
        <figcaption className="Figcaption flex flex-col text-center m-auto">
          <div className="text-yellow-900 font-bold text-2xl text-center">
            {name}
          </div>
          <div className="Ingredients italic text-m text-center m-auto">
            {selectedIngredients
              .reduce(
                (listOfIngredients, ingredient) =>
                  `${listOfIngredients} ${ingredient[0]},`,
                ''
              )
              .replace(/,\s*$/, '')}
          </div>
          <div className="text-s text-center">{nutrition}</div>
          <div className="font-bold italic text-s text-right pr-4">{price}</div>
          <div className="Button flex flex-col text-center m-auto">
            <button
              className="bg-yellow-800 hover:bg-red-600 text-gray-200 font-bold py-2 px-4 border border-gray-400 rounded shadow inline-flex justify-center "
              type="button"
            >
              <img src={pizzabox} alt="pizzabox" className="h-6 w-6 mr-2" />
              Ajouter au panier
            </button>

            <button
              className="mt-2 bg-yellow-800 hover:bg-yellow-500 text-gray-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4"
              type="button"
            >
              <NavLink
                to={{
                  pathname: '/order/create-pizza',
                  state: {
                    selectIngredients: selectedIngredients,
                  },
                }}
              >
                Personnaliser la pizza
              </NavLink>
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
);

export default PizzaComposition;
