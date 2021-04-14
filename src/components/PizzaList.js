import React from 'react';

const PizzaList = ({ name, ingredients, nutrition, image }) => (
  <figure className="PizzaList">
    <img src={image} alt={name} />
    <figcaption>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{nutrition}</p>
    </figcaption>
  </figure>
);

export default PizzaList;
