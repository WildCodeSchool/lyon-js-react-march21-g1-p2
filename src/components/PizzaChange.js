import { useState, useEffect } from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const maxKcal = 2000;

export default function PizzaChange(props) {
  const chosenIngredientsList = Object.keys(props).map((i) => props[i]);
  const requestImageFile = require.context('../assets', true, /.*/);
  const [clipGauge, setClipGauge] = useState(0);
  const [leftPositionKcallFull, setLeftPositionKcallFull] = useState(0);
  const [leftPositionKcallQuarter, setLeftPositionKcallQuarter] = useState(0);
  const totalKcal = Math.round(
    chosenIngredientsList.reduce(
      (totalK, currentIngr) =>
        totalK +
        (currentIngr.quantity * currentIngr.serving * currentIngr.kcal100) /
          100,
      0
    )
  );

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

  useEffect(() => {
    setClipGauge(totalKcal / maxKcal);
    setLeftPositionKcallFull(
      totalKcal > maxKcal ? 210 : (totalKcal * 200) / maxKcal
    );
    setLeftPositionKcallQuarter(
      totalKcal / 4 > maxKcal ? 210 : (totalKcal * 200) / maxKcal / 4
    );
  }, [totalKcal]);

  return (
    <div className="mx-4 my-2">
      <div className="text-l text-center">
        Poids total :{' '}
        {chosenIngredientsList.reduce(
          (totalWeight, currentIngr) =>
            totalWeight + currentIngr.quantity * currentIngr.serving,
          0
        )}{' '}
        g
      </div>
      <div className="gauges">
        <div className="gauge-container">
          <div className="gauge-bg gauge-position" />
          <div className="gauge gauge-position" />
          <div
            className="kcal-val gauge-position"
            style={{
              left: leftPositionKcallFull,
            }}
          >
            {totalKcal}
          </div>
          <div className="gauge-legend">kcal par pizza</div>
          <svg width="0" height="0">
            <clipPath
              id="clip-path-full-pizza"
              clipPathUnits="objectBoundingBox"
            >
              <polygon
                points={`${clipGauge} 0, ${clipGauge} 1, 0 1, 0 0, ${clipGauge} 0`}
              />
            </clipPath>
          </svg>
        </div>
        <div className="gauge-container">
          <div className="gauge-bg gauge-position" />
          <div className="gauge-quarter gauge-position" />
          <div
            className="kcal-val gauge-position"
            style={{
              left: leftPositionKcallQuarter,
            }}
          >
            {Math.round(totalKcal / 4)}
          </div>
          <div className="gauge-legend">kcal par quart de pizza</div>
          <svg width="0" height="0">
            <clipPath
              id="clip-path-quarter-pizza"
              clipPathUnits="objectBoundingBox"
            >
              <polygon
                points={`${clipGauge / 4} 0, ${clipGauge / 4} 1, 0 1, 0 0, ${
                  clipGauge / 4
                } 0`}
              />
            </clipPath>
          </svg>
        </div>
      </div>
      <div className="pizza-mockup-container">
        {shuffledImagesForPizza.map((ingr, index) => (
          <img
            key={ingr.id}
            src={requestImageFile(`./${ingr.imgsrc}`).default}
            alt={ingr.name}
            className="img-pizza-construction"
            style={{
              transform: `translateX(-50%) translateY(-50%) rotate(${
                index > 1 ? Math.random() * 360 : 0
              }deg)`, // no rotation for pizza dough and tomato sauce
            }}
          />
        ))}
      </div>
    </div>
  );
}
