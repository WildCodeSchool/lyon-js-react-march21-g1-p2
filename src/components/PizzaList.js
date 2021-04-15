import React from 'react';

const PizzaList = ({ name, ingredients, nutrition, image }) => (
  <figure className="PizzaList">
    <img src={image} alt={name} className="max-w-xs" />
    <figcaption>
      <div className="m-6 font-bold text-2xl text-center">{name}</div>
      <div className="m-6 font-italic text-m text-center">{ingredients}</div>
      <p>{nutrition}</p>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex text-center items-center"
        type="submit"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        Ajouter au panier
      </button>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        type="submit"
      >
        Personnaliser la pizza
      </button>
    </figcaption>
  </figure>
);

export default PizzaList;
