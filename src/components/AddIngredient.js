export default function AddIngredient(props) {
  const ChosenIngredientsList = Object.keys(props).map((i) => props[i]);
  return (
    <div>
      <div className="pizza-mockup">
        {ChosenIngredientsList.map((ingr) => (
          <img
            key={ingr.id}
            src={ingr.imgsrc}
            alt={ingr.name}
            className="img-ingredients"
          />
        ))}
      </div>

      <div className="text-l text-center">
        Poids total :{' '}
        {ChosenIngredientsList.reduce(
          (totalWeight, currentIngr) => totalWeight + currentIngr.quantity,
          0
        )}{' '}
        g
      </div>
      <div className="text-l text-center">
        Total kcal :{' '}
        {ChosenIngredientsList.reduce(
          (totalKcal, currentIngr) =>
            totalKcal + (currentIngr.quantity * currentIngr.kcal100) / 100,
          0
        )}{' '}
        kcal
      </div>
    </div>
  );
}
