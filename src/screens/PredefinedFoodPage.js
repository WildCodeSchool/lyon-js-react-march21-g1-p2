import React from 'react';
import PizzaList from '../components/PizzaList';

function PizzaRecipes() {
  const pizzaList = [
    {
      name: 'Pizza Margarita',
      ingredients: 'tomate, mozzarella, olives, roquette',
      nutrition: '0 Kcal',
      image: 'public/assets/margarita.png',
    },
    {
      name: 'Pizza Regina',
      ingredients: 'tomate, fromage, jambon, champignons, olives, roquette',
      nutrition: '0 Kcal',
      image: '../assets/regina.png',
    },

    {
      name: 'Pizza Diavola',
      ingredients: 'tomate, fromage, chorizo, oignons, poivrons',
      nutrition: '0 Kcal',
      image: 'src/components/emptyPizza.png',
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
