import React from 'react';
import underconstruction from '../assets/under-construction.jpg';
import constructioncone from '../assets/cone.png';

const UnderConstruction = () => {
  return (
    <div>
      <p className="text-xs font-italic">
        Cette page est en cours de construction, revenez-vite!
      </p>
      <img
        src={underconstruction}
        alt="under construction"
        className="under-construction"
      />
      <img
        src={constructioncone}
        alt="construction cone"
        className="construction-cone"
      />
    </div>
  );
};

export default UnderConstruction;
