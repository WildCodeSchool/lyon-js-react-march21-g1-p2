import React from 'react';
import underconstruction from '../assets/under-construction.png';

const UnderConstruction = () => {
  return (
    <div>
      <p className="text-xs font-italic">
        Cette page est en cours de construction, revenez-vite!
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
