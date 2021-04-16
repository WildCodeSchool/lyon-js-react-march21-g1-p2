import { NavLink } from 'react-router-dom';
import Homepizza from '../components/Homepizza';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <NavLink to="/pizzaperso">
        <svg className="rounded-text" width="500" height="400">
          <path id="curve" fill="transparent" d="M0,350 C0,0 500,0 500,350" />
          <text className="curved-text" width="500">
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
  );
}
