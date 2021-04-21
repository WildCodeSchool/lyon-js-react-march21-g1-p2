import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function PizzaChange(props) {
  const chosenIngredientsList = Object.keys(props).map((i) => props[i]);

  /* Creating a new array with as much as items as the total quantity of servings, and then shuffling it so the ingredients will be "mixed" on the pizza image */
  const imagesForPizza = [];
  chosenIngredientsList.forEach((ingredient) => {
    for (let i = 1; i <= ingredient.quantity; i += 1) {
      imagesForPizza.push({
        name: ingredient.name,
        imgsrc: ingredient.imgsrc,
        id: uuidv4(),
      });
    }
  });
  // one doesn't shuffle the first 2 layers (pizza dough + tomato sauce) which have to stay at the bottom of the pile
  const shuffledImagesForPizza = imagesForPizza
    .slice(0, 2)
    .concat(_.shuffle(imagesForPizza.slice(2, imagesForPizza.length)));

  return (
    <div>
      <div className="pizza-mockup-container">
        {shuffledImagesForPizza.map((ingr, index) => (
          <img
            key={ingr.id}
            src={ingr.imgsrc}
            alt={ingr.name}
            className="img-pizza-construction"
            style={{
              transform: `translateX(-50%) translateY(-50%) rotate(${
                index > 1 ? Math.random() * 365 : 0
              }deg)`, // no rotation for pizza dough and tomato sauce
            }}
          />
        ))}
      </div>

      <div className="text-l text-center">
        Poids total :{' '}
        {chosenIngredientsList.reduce(
          (totalWeight, currentIngr) =>
            totalWeight + currentIngr.quantity * currentIngr.serving,
          0
        )}{' '}
        g
      </div>
      <div className="text-l text-center">
        Total kcal :{' '}
        {chosenIngredientsList.reduce(
          (totalKcal, currentIngr) =>
            totalKcal +
            (currentIngr.quantity * currentIngr.serving * currentIngr.kcal100) /
              100,
          0
        )}{' '}
        kcal
      </div>
    </div>
  );
}
