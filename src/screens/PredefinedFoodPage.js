import React from 'react';
import PizzaComposition from '../components/PizzaComposition';
import margarita from '../assets/margarita.png';
import regina from '../assets/regina.png';
import diavola from '../assets/diavola.png';

function PizzaRecipes() {
  const pizzaList = [
    {
      name: 'Margarita',
      ingredients: [
        ['Tomates', 1],
        ['Mozzarella', 1],
        ['Olives', 1],
        ['Roquette', 1],
      ],
      nutrition: '0 Kcal',
      image: margarita,
      price: 'Prix : 9 €',
    },
    {
      name: 'Regina',
      ingredients: [
        ['Tomates', 1],
        ['Fromage', 1],
        ['Jambon', 1],
        ['Champignons', 1],
        ['Olives', 1],
        ['Roquette', 1],
      ],
      nutrition: '0 Kcal',
      image: regina,
      price: 'Prix : 12 €',
    },

    {
      name: 'Diavola',
      ingredients: [
        ['Tomates', 1],
        ['Fromage', 1],
        ['Chorizo', 1],
        ['Oignons', 1],
        ['Poivrons', 1],
      ],
      nutrition: '0 Kcal',
      image: diavola,
      price: 'Prix : 11 €',
    },
  ];

  return (
    <div>
      <div className="m-6 mb-12 font-bold text-4xl text-center" h1>
        Nos Pizzas
      </div>
      <div className="flex flex-col ml-10">
        {pizzaList.map((pizza) => (
          <PizzaComposition
            key={pizza.name}
            name={pizza.name}
            selectedIngredients={pizza.ingredients}
            nutrition={pizza.nutrition}
            image={pizza.image}
            price={pizza.price}
          />
        ))}
      </div>
    </div>
  );
}

export default PizzaRecipes;
