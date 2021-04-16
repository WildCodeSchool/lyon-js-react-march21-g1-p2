import React from 'react';
import pizzabox from '../assets/pizzabox.png';

const PizzaList = ({ name, ingredients, nutrition, image }) => (
  <figure className="PizzaList">
    <img src={image} alt={name} className="max-w-xs" />
    <figcaption className="">
      <div className="m-6 font-bold text-2xl text-center">{name}</div>
      <div className="m-6 font-italic text-m text-center">{ingredients}</div>
      <div className="m-6 font-italic text-s text-center">{nutrition}</div>
      <div className="Buttons flex flex-col">
        <button
          className="bg-orange-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded border border-gray-400 rounded shadow inline-flex "
          type="submit"
        >
          <img src={pizzabox} alt="pizzabox" className="h-6 w-6 mr-2" />
          Ajouter au panier
        </button>
        <button
          className="bg-orange-400 hover:bg-red-600 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          type="submit"
        >
          Personnaliser la pizza
        </button>
      </div>
    </figcaption>
  </figure>
);

export default PizzaList;
