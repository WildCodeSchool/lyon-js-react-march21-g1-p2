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
        ['Tomates', 3],
        ['Mozzarella', 1],
        ['Olives', 3],
        ['Roquette', 2],
      ],
      nutrition: '0 Kcal',
      image: margarita,
      price: 'Prix : 9 €',
    },
    {
      name: 'Regina',
      ingredients: [
        ['Tomates', 2],
        ['Fromage', 1],
        ['Jambon', 1],
        ['Champignons', 1],
        ['Olives', 2],
        ['Roquette', 2],
      ],
      nutrition: '0 Kcal',
      image: regina,
      price: 'Prix : 12 €',
    },

    {
      name: 'Diavola',
      ingredients: [
        ['Tomates', 3],
        ['Fromage', 1],
        ['Chorizo', 2],
        ['Oignons', 2],
        ['Poivrons', 2],
      ],
      nutrition: '0 Kcal',
      image: diavola,
      price: 'Prix : 11 €',
    },
  ];

  return (
    <div>
      <div className="m-6 font-bold text-4xl text-center">Nos Pizzas</div>
      <div className="Pizzacontainer flex flex-col mb-6">
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
