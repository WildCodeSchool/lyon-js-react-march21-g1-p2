import React from 'react';
import PizzaList from '../components/PizzaList';
import margarita from '../assets/margarita.png';
import regina from '../assets/regina.png';
import diavola from '../assets/diavola.png';

function PizzaRecipes() {
  const pizzaList = [
    {
      name: 'Margarita',
      ingredients: 'Ingredients : Tomate, Mozzarella, Olives, Roquette',
      nutrition: '0 Kcal',
      image: margarita,
    },
    {
      name: 'Regina',
      ingredients:
        'Ingredients : Tomate, Fromage, Jambon, Champignons, Olives, Roquette',
      nutrition: '0 Kcal',
      image: regina,
    },

    {
      name: 'Diavola',
      ingredients: 'Ingredients : Tomate, Fromage, Chorizo, Oignons, Poivrons',
      nutrition: '0 Kcal',
      image: diavola,
    },
  ];

  return (
    <div>
      <div className="m-6 font-bold text-4xl text-center" h1>
        Nos Pizzas
      </div>
      <div className="flex flex-row justify-center items-center m-12">
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
    </div>
  );
}

export default PizzaRecipes;
