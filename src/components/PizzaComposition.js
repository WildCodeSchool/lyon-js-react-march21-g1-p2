import React from 'react';
import pizzabox from '../assets/pizzabox.png';

const PizzaComposition = ({ name, ingredients, nutrition, image, price }) => (
  <figure className="PizzaList flex flex-row m-auto mt-10">
    <img src={image} alt={name} className="max-w-xs m-auto" />
    <figcaption className="Figcaption flex flex-col justify-center">
      <div className="m-6 text-yellow-900 font-bold text-2xl text-center">
        {name}
      </div>
      <div className="Ingredients mtb-4 italic text-m text-center">
        {ingredients}
      </div>
      <div className="m-4 text-s text-center">{nutrition}</div>
      <div className="m-4 font-bold italic text-s text-right">{price}</div>
      <div className="Button flex flex-col text-center">
        <button
          className="bg-yellow-800 hover:bg-red-600 text-gray-200 font-bold py-2 px-4 rounded border border-gray-400 rounded shadow inline-flex justify-center "
          type="submit"
        >
          <img src={pizzabox} alt="pizzabox" className="h-6 w-6 mr-2" />
          Ajouter au panier
        </button>
        <button
          className="mt-2 bg-yellow-800 hover:bg-yellow-500 text-gray-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4"
          type="submit"
        >
          Personnaliser la pizza
        </button>
      </div>
    </figcaption>
  </figure>
);

export default PizzaComposition;