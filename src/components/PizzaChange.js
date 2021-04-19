export default function PizzaChange(props) {
  const chosenIngredientsList = Object.keys(props).map((i) => props[i]);
  return (
    <div>
      <div className="pizza-mockup-container">
        {chosenIngredientsList.map((ingr) =>
          ingr.quantity > 0 ? (
            <img
              key={ingr.id}
              src={ingr.imgsrc}
              alt={ingr.name}
              className="img-pizza-construction"
            />
          ) : null
        )}
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
