import axios from 'axios';
import { useEffect, useState } from 'react';
import API from '../APIClient';

const { CancelToken } = axios;

export default function OrdersRecap() {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [error, setError] = useState('');

  const handleError = (err) => {
    if (!axios.isCancel(err))
      setError('Something bad happened, sorry for the inconvenience');
  };

  useEffect(() => {
    const source = CancelToken.source();
    setLoadingOrders(true);
    API.get('/orders', { cancelToken: source.token })
      .then((res) => setOrders(res.data))
      .catch(handleError)
      .finally(() => {
        if (
          !(
            source.token.reason &&
            source.token.reason.message === 'request cancelled'
          )
        )
          setLoadingOrders(false);
      });
    return () => {
      source.cancel('request cancelled');
    };
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold m-3">
        Historique des commandes
      </h2>
      {error && <h3>{error}</h3>}
      {loadingOrders ? (
        <div className="flex justify-center  pt-3">Loading in progress</div>
      ) : (
        <div>
          {!loadingOrders && orders.length === 0 && <div>Aucune commande</div>}
          <table id="orders-recap">
            <thead>
              <tr>
                <th>Numéro de commande</th>
                <th>Ingrédients/quantité</th>
                <th>Nombre de pizzas</th>
                <th>Prix de la commande</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(({ id, ingredients, quantity, price }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      {ingredients
                        .replace(/"/g, ' ')
                        .replace(/[{}]/g, '')
                        .replace(/:/g, ': ')}
                    </td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
