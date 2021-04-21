import React from 'react';
import PizzaComposition from '../components/PizzaComposition';
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
      price: 'Prix : 9 €',
    },
    {
      name: 'Regina',
      ingredients:
        'Ingredients : Tomate, Fromage, Jambon, Champignons, Olives, Roquette',
      nutrition: '0 Kcal',
      image: regina,
      price: 'Prix : 12 €',
    },

    {
      name: 'Diavola',
      ingredients: 'Ingredients : Tomate, Fromage, Chorizo, Oignons, Poivrons',
      nutrition: '0 Kcal',
      image: diavola,
      price: 'Prix : 11 €',
    },
  ];

  return (
    <div>
      <div className="m-6 font-bold text-4xl text-center" h1>
        Nos Pizzas
      </div>
      <div className="Pizzacontainer flex flex-col w-60% m-auto">
        {pizzaList.map((pizza) => (
          <PizzaComposition
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
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
