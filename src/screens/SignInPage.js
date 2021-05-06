import { NavLink } from 'react-router-dom';
import UnderConstruction from '../components/UnderConstruction';

export default function SignInPage() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl m-2 text-center">Se connecter</h1>
      <UnderConstruction />
      <NavLink
        to={{
          pathname: '/order/ordersrecap',
        }}
      >
        <button
          className="bg-yellow-800 hover:bg-red-600 text-gray-200 text-base font-bold py-2 px-4 border border-gray-400 rounded shadow inline-flex m-4"
          type="button"
        >
          Afficher l'historique des commandes
        </button>
      </NavLink>
    </div>
  );
}
