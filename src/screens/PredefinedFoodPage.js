import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../APIClient';

import PizzaComposition from '../components/PizzaComposition';

const { CancelToken } = axios;
export default function PizzaRecipes() {
  const [pizzas, setPizzas] = useState([]);
  const [loadingPizzas, setLoadingPizzas] = useState(false);
  const [error, setError] = useState('');

  const handleError = (err) => {
    if (!axios.isCancel(err))
      setError('Something bad happened, sorry for the inconvenience');
  };

  useEffect(() => {
    const source = CancelToken.source();
    setLoadingPizzas(true);
    API.get('/order/pizza-list', { cancelToken: source.token })
      .then((res) => setPizzas(res.data))
      .catch(handleError)
      .finally(() => {
        if (
          !(
            source.token.reason &&
            source.token.reason.message === 'request cancelled'
          )
        )
          setLoadingPizzas(false);
      });
    return () => {
      source.cancel('request cancelled');
    };
  }, []);

  return (
    <div>
      <div className="m-6 font-bold text-4xl text-center">Nos Pizzas</div>
      {error && <h3>{error}</h3>}
      {loadingPizzas ? (
        <div className="flex justify-center  pt-3">Loading in progress</div>
      ) : (
        <div>
          {!loadingPizzas && pizzas.length === 0 && <div>Aucune pizza</div>}
          <div className="Pizzacontainer flex flex-col mb-6">
            {pizzas.map((pizza) => (
              <PizzaComposition
                key={pizza.pizzas_id}
                name={pizza.pizzas_name}
                selectedIngredients={pizza.pizzas_ingredients}
                nutrition={pizza.pizzas_kcal}
                image={pizza.pizzas_imgaddress}
                price={pizza.pizzas_price}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
