import { useState, useEffect } from 'react';
import axios from 'axios';
import EmptyPizza from '../components/EmptyPizza';
import Anchovy from '../images/unite-anchois.png';
import Pineapple from '../images/unite-ananas.png';
import Mushroom from '../images/unite-champignon.png';
import Chorizo from '../images/unite-chorizo.png';
import PizzaDough from '../images/unite-fond-pate.png';
import PizzaSauce from '../images/unite-fond-sauce.png';
import Emmental from '../images/unite-fromage.png';
import Jambon from '../images/unite-jambon.png';
import Mozzarella from '../images/unite-mozarella.png';
import Onion from '../images/unite-oignon.png';
import Olive from '../images/unite-olive.png';
import Peppers from '../images/unite-poivron.png';
import Arugula from '../images/unite-roquette.png';
import Tomato from '../images/unite-tomate.png';

const ingrForRequests = [
  {
    id: 1,
    name: 'Tomate',
    imgsrc: Tomato,
    ingr: 'tomato',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 2,
    name: 'Chorizo',
    imgsrc: Chorizo,
    ingr: 'chorizo',
    category: 'Ingredient',
    price: '3',
    serving: 50,
  },
  {
    id: 3,
    name: 'Emmental',
    imgsrc: Emmental,
    ingr: 'emmental',
    category: 'Ingredient',
    price: '4',
    serving: 100,
  },
  {
    id: 4,
    name: 'Oignon',
    imgsrc: Onion,
    ingr: 'onion',
    category: 'Ingredient',
    price: '1',
    serving: 200,
  },
  {
    id: 5,
    name: 'Olive',
    imgsrc: Olive,
    ingr: 'olive',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 6,
    name: 'Poivron',
    imgsrc: Peppers,
    ingr: 'peppers',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 7,
    name: 'Champignon',
    imgsrc: Mushroom,
    ingr: 'mushroom',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 8,
    name: 'Jambon',
    imgsrc: Jambon,
    ingr: 'ham',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 9,
    name: 'Anchois',
    imgsrc: Anchovy,
    ingr: 'anchovies',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 10,
    name: 'Mozzarella',
    imgsrc: Mozzarella,
    ingr: 'mozzarella',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 11,
    name: 'Roquette',
    imgsrc: Arugula,
    ingr: 'arugula',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 12,
    name: 'Ananas',
    imgsrc: Pineapple,
    ingr: 'pineapple',
    category: 'Ingredient',
    price: '2',
    serving: 200,
  },
  {
    id: 13,
    name: 'Pâte à pizza',
    imgsrc: PizzaDough,
    ingr: 'pizza%20dough',
    category: 'Base',
    price: '2',
    serving: 200,
  },
  {
    id: 14,
    name: 'Sauce tomate',
    imgsrc: PizzaSauce,
    ingr: 'tomato%20sauce',
    category: 'Base',
    price: '2',
    serving: 200,
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
        };
      });
  });
};

export default function CustomizedFoodPage() {
  const [ingredientsKcal, setIngredientsKcal] = useState([]);

  useEffect(() => {
    Promise.all(populateingredients(ingrForRequests)).then((newingredients) => {
      setIngredientsKcal(newingredients);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center m-12">
        <EmptyPizza />
      </div>

      <ul className="flex flex-wrap justify-evenly">
        {ingredientsKcal
          .filter((ingredient) => ingredient.category === 'Ingredient')
          .map((ingr) => (
            <li key={ingr.id} className="flex flex-col m-6">
              <div className="m-6 font-bold text-2xl text-center">
                {ingr.name}
              </div>
              <img src={ingr.imgsrc} alt={ingr.name} className="max-w-xs" />
              <div className="mt-4 font-bold text-l text-center">
                Portion : {ingr.serving}g
              </div>
              <div className="text-l text-center">
                {(ingr.kcal100 * ingr.serving) / 100} kcal par portion
              </div>
              <div className="text-l text-center">{ingr.price}€ la portion</div>
            </li>
          ))}
      </ul>
    </>
  );
}
