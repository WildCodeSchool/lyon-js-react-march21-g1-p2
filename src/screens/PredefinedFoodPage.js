import React from 'react';
import PizzaList from '../components/PizzaList';
import margarita from '../assets/margarita.png';
import regina from '../assets/regina.png';
import diavola from '../assets/diavola.png';

function PizzaRecipes() {
  const pizzaList = [
    {
      name: 'Pizza Margarita',
      ingredients: 'tomate, mozzarella, olives, roquette',
      nutrition: '0 Kcal',
      image: margarita,
    },
    {
      name: 'Pizza Regina',
      ingredients: 'tomate, fromage, jambon, champignons, olives, roquette',
      nutrition: '0 Kcal',
      image: regina,
    },

    {
      name: 'Pizza Diavola',
      ingredients: 'tomate, fromage, chorizo, oignons, poivrons',
      nutrition: '0 Kcal',
      image: diavola,
    },
  ];

  return (
    <div>
      <h1>Nos pizzas</h1>
      {pizzaList.map((pizza) => (
        <PizzaList
          key={pizza.name}
          name={pizza.name}
          ingredients={pizza.ingredients}
          nutrition={pizza.nutrition}
          image={pizza.image}
        />
      ))}
    </div>
  );
}

export default PizzaRecipes;
