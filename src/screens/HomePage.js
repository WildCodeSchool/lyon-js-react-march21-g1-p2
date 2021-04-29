import { NavLink } from 'react-router-dom';
import Homepizza from '../components/Homepizza';

export default function HomePage() {
  return (
    <div>
      <div>
        <h1 className="m-6 font-bold text-lg text-center">
          Serez-vous notre pizzaïolo du mois ?
        </h1>
        <p>
          Chez U’Pizz, nous vous proposons depuis notre fidèle Food Truck toutes
          les saveurs de l’Italie dans nos pizzas, et vous pourrez mettre la
          main à la pâte en ajoutant les ingrédients de votre choix de la liste
          de produits frais mis à votre disposition. <br />
          Notre emplacement à Confluence vous offre un magnifique écrin de
          verdure au cœur de la ville, de jour comme de nuit. <br />
        </p>
        <h2 className="font-bold text-lg text-left">
          Prenez place sur notre terrasse au bord du fleuve ! <br />A vos
          papilles !
        </h2>
      </div>
      <div className="pizza-button-container flex flex-col justify-center items-center ">
        <NavLink className="pizza-link" to="/order/create-pizza">
          <svg
            className="rounded-text"
            width="100%"
            viewBox="0 0 500 350"
            preserveAspectRatio="none"
          >
            <path id="curve" fill="transparent" d="M0,350 C0,0 500,0 500,350" />
            <text className="curved-text">
              <textPath
                alignmentBaseline="top"
                xlinkHref="#curve"
                startOffset="50%"
                textAnchor="middle"
              >
                Commandez ici !
              </textPath>
            </text>
          </svg>
          <Homepizza />
        </NavLink>
      </div>
    </div>
  );
}
