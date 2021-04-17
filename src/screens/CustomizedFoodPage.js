import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import PizzaChange from '../components/PizzaChange';
import PizzaDough from '../assets/unite-fond-pate.png';
import PizzaSauce from '../assets/unite-fond-sauce.png';

import Anchovy from '../assets/unite-anchois.png';
import Pineapple from '../assets/unite-ananas.png';
import Mushroom from '../assets/unite-champignon.png';
import Chorizo from '../assets/unite-chorizo.png';
import Emmental from '../assets/unite-fromage.png';
import Ham from '../assets/unite-jambon.png';
import Mozzarella from '../assets/unite-mozzarella.png';
import Onion from '../assets/unite-oignon.png';
import Olive from '../assets/unite-olive.png';
import Peppers from '../assets/unite-poivron.png';
import Arugula from '../assets/unite-roquette.png';
import Tomato from '../assets/unite-tomate.png';

import AnchovyLayer from '../assets/anchois.png';
import PineappleLayer from '../assets/ananas.png';
import MushroomLayer from '../assets/champignons.png';
import ChorizoLayer from '../assets/chorizos.png';
import EmmentalLayer from '../assets/fromage.png';
import HamLayer from '../assets/jambon.png';
import MozzarellaLayer from '../assets/mozzarella.png';
import OnionLayer from '../assets/oignon.png';
import OliveLayer from '../assets/olives.png';
import PeppersLayer from '../assets/poivrons.png';
import ArugulaLayer from '../assets/roquette.png';
import TomatoLayer from '../assets/tomates.png';

const ingrForRequests = [
  {
    id: uuidv4(),
    name: 'Pâte à pizza',
    imgsrc: PizzaDough,
    imglayer: PizzaDough,
    ingr: 'pizza%20dough',
    category: 'Base',
    price: '2',
    serving: 228,
  },
  {
    id: uuidv4(),
    name: 'Sauce tomate',
    imgsrc: PizzaSauce,
    imglayer: PizzaSauce,
    ingr: 'tomato%20sauce',
    category: 'Base',
    price: '2',
    serving: 50,
  },
  {
    id: uuidv4(),
    name: 'Tomate',
    imgsrc: Tomato,
    imglayer: TomatoLayer,
    ingr: 'tomato',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Chorizo',
    imgsrc: Chorizo,
    imglayer: ChorizoLayer,
    ingr: 'chorizo',
    category: 'Ingredient',
    price: '3',
    serving: 50,
  },
  {
    id: uuidv4(),
    name: 'Emmental',
    imgsrc: Emmental,
    imglayer: EmmentalLayer,
    ingr: 'emmental',
    category: 'Ingredient',
    price: '4',
    serving: 100,
  },
  {
    id: uuidv4(),
    name: 'Oignon',
    imgsrc: Onion,
    imglayer: OnionLayer,
    ingr: 'onion',
    category: 'Ingredient',
    price: '1',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Olive',
    imgsrc: Olive,
    imglayer: OliveLayer,
    ingr: 'olive',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Poivron',
    imgsrc: Peppers,
    imglayer: PeppersLayer,
    ingr: 'peppers',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Champignon',
    imgsrc: Mushroom,
    imglayer: MushroomLayer,
    ingr: 'mushroom',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Jambon',
    imgsrc: Ham,
    imglayer: HamLayer,
    ingr: 'ham',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Anchois',
    imgsrc: Anchovy,
    imglayer: AnchovyLayer,
    ingr: 'anchovies',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Mozzarella',
    imgsrc: Mozzarella,
    imglayer: MozzarellaLayer,
    ingr: 'mozzarella',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Roquette',
    imgsrc: Arugula,
    imglayer: ArugulaLayer,
    ingr: 'arugula',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: uuidv4(),
    name: 'Ananas',
    imgsrc: Pineapple,
    imglayer: PineappleLayer,
    ingr: 'pineapple',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
];

const initialIngredientsList = [
  {
    id: ingrForRequests[0].id,
    name: 'Pâte à pizza',
    imgsrc: PizzaDough,
    quantity: 1,
    serving: 228,
    kcal100: 200,
  },
  {
    id: ingrForRequests[1].id,
    name: 'Sauce tomate',
    imgsrc: PizzaSauce,
    quantity: 1,
    serving: 50,
    kcal100: 400,
  },
];

const populateingredients = (array) => {
  return array.map((ingredient) => {
    return axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=cb0e9cff&app_key=9c4aa6b62257c975bbc78df7ddb04af6&category=generic-foods&ingr=${ingredient.ingr}`
      )
      .then((response) => response.data)
      .then((data) => {
        return {
          ...ingredient,
          kcal100: data.parsed[0].food.nutrients.ENERC_KCAL,
          quantity: 0,
        };
      });
  });
};

export default function CustomizedFoodPage() {
  const [ingredientsKcal, setIngredientsKcal] = useState([]);
  const [chosenIngredientsList, setChosenIngredientsList] = useState(
    initialIngredientsList
  );

  useEffect(() => {
    Promise.all(populateingredients(ingrForRequests)).then((newingredients) => {
      setIngredientsKcal(newingredients);
    });
  }, []);

  const setServingQuantity = (ingredientId) => {
    const ingredExists = chosenIngredientsList.filter(
      (ingred) => ingred.id === ingredientId
    );

    return ingredExists.length > 0 ? (
      <span>{ingredExists[0].quantity} </span>
    ) : (
      <span>0 </span>
    );
  };

  const handleChangeQuantity = (id, operator) => {
    const ingredToUpdate = chosenIngredientsList.filter(
      (ingred) => ingred.id === id
    );
    const currentQuantity =
      ingredToUpdate.length === 0 ? 0 : ingredToUpdate[0].quantity;

    if (operator === 'add') {
      if (ingredToUpdate.length === 0) {
        const ingredToAdd = ingredientsKcal.filter(
          (ingred) => ingred.id === id
        );
        setChosenIngredientsList((IngredientsList) => [
          ...IngredientsList,
          {
            id: ingredToAdd[0].id,
            name: ingredToAdd[0].name,
            imgsrc: ingredToAdd[0].imglayer,
            quantity: 1,
            serving: ingredToAdd[0].serving,
            kcal100: ingredToAdd[0].kcal100,
          },
        ]);
      } else {
        ingredToUpdate[0].quantity += 1;

        setChosenIngredientsList([...chosenIngredientsList]);
      }
    } else if (operator === 'remove') {
      if (currentQuantity > 0) {
        ingredToUpdate[0].quantity -= 1;

        setChosenIngredientsList([...chosenIngredientsList]);
      } else if (currentQuantity === 1) {
        const cleanedingredients = ingredientsKcal.filter(
          (ingred) => ingred.id !== id
        );
        setChosenIngredientsList(cleanedingredients);
      }
    }
  };

  return (
    <div>
      <div className="m-auto">
        <PizzaChange {...chosenIngredientsList} />
      </div>

      <ul className="ingredients">
        {ingredientsKcal
          .filter((ingredient) => ingredient.category === 'Ingredient')
          .map((ingr) => (
            <li key={ingr.id} className="ingredient">
              <div className="m-6 font-bold text-2xl text-center">
                {ingr.name}
              </div>
              <button
                type="button"
                className="m-auto w-full"
                onClick={() => handleChangeQuantity(ingr.id, 'add')}
              >
                <img
                  id={ingr.id}
                  src={ingr.imgsrc}
                  alt={ingr.name}
                  className="sm:w-48 w-28 m-auto"
                />
              </button>
              <div className="mt-4 font-bold text-l text-center">
                Portion : {ingr.serving}g
              </div>
              <div className="text-l text-center">
                {(ingr.kcal100 * ingr.serving) / 100} kcal par portion
              </div>
              <div className="text-l text-center">{ingr.price}€ la portion</div>
              <div className="text-l text-center">
                <button
                  id={ingr.id}
                  type="button"
                  className="bg-green-500 text-white font-bold w-8 h-8 m-2 rounded"
                  onClick={() => handleChangeQuantity(ingr.id, 'add')}
                >
                  +
                </button>
                {setServingQuantity(ingr.id)}
                portion(s)
                <button
                  type="button"
                  className="bg-red-500 text-white font-bold w-8 h-8 m-2 rounded"
                  onClick={() => handleChangeQuantity(ingr.id, 'remove')}
                >
                  -
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
