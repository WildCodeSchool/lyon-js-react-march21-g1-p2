import React from 'react';

const PizzaList = ({ name, ingredients, nutrition, image }) => (
  <figure className="PizzaList">
    <img src={image} alt={name} className="max-w-xs" />
    <figcaption>
      <div className="m-6 font-bold text-2xl text-center">{name}</div>
      <p>{ingredients}</p>
      <p>{nutrition}</p>
      <button type="submit">Ajouter au panier</button>
      <button type="submit">Personnaliser la pizza</button>
    </figcaption>
  </figure>
);

export default PizzaList;
