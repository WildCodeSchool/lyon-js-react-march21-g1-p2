import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../APIClient';

export default function ConfirmationPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const chosenIngredientsList =
    location.state != null ? location.state.chosenIngredientsList : [];

  // Formating the data for the order confirmation (and update of database) from the data released by customizedFoodPage
  const orderData = chosenIngredientsList.map((ingred) => {
    return {
      name: ingred.name,
      quantity: ingred.quantity,
      ingredprice: ingred.quantity * ingred.price,
    };
  });

  const totalPrice = orderData.reduce(
    (total, ingredient) => total + ingredient.ingredprice,
    0
  );

  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item.quantity,
      };
    }, initialValue);
  };

  const ingredsObject = convertArrayToObject(orderData, 'name');
  const data = {
    ingredients: JSON.stringify(ingredsObject),
    quantity: 1,
    price: totalPrice,
  };

  // Adding this order data to the database
  useEffect(() => {
    API.post('/orders', data)
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setError('Cannot record this order.');
      });
  }, []);

  return (
    <>
      <p>
        {orderData
          .slice(2, orderData.length)
          .reduce(
            (listOfIngredients, ingredient) =>
              `${listOfIngredients} ${ingredient.name},`,
            ''
          )
          .replace(/,\s*$/, '')}
      </p>
      <p>Prix total : {totalPrice} €</p>
      {error && <h3>{error}</h3>}
      {success && <h3>Votre commande a bien été enregistrée !</h3>}
    </>
  );
}
