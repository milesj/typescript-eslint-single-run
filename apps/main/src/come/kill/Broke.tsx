import React, { useState } from 'react';
import Warn from '../../Warn';
import Start from '../../saved/Start';
import Trunk from '../../saved/type/Trunk';
import Melted from '../../saved/milk/Melted';
import Magic from '../../saved/duty/Magic';
import Softly from '../../saved/threw/Softly';
import Which from '../../saved/strip/Which';
import Past from '../../saved/height/Past';
import Young from '../Young';

export default function Broke() {
  const value = useState();

  return (
    <div>
      <Warn />
      <Start />
      <Trunk />
      <Melted />
      <Magic />
      <Softly />
      <Which />
      <Past />
      <Young />
    </div>
  );
}
