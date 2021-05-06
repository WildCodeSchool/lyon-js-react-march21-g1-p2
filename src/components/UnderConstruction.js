import React from 'react';
import underconstruction from '../assets/under-construction.png';

const UnderConstruction = () => {
  return (
    <div>
      <p className="text-md m-3 font-italic">
        Cette fonctionnalité est en cours de construction, elle sera
        prochainement disponible
      </p>
      <img
        src={underconstruction}
        alt="under construction"
        className="workinprogress"
      />
    </div>
  );
};

export default UnderConstruction;
