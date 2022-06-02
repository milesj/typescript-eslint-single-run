import React, { useCallback } from 'react';
import Warn from '../Warn';
import Start from '../saved/Start';
import Trunk from '../saved/type/Trunk';
import Melted from '../saved/milk/Melted';
import Magic from '../saved/duty/Magic';
import Softly from '../saved/threw/Softly';
import Which from '../saved/strip/Which';
import Past from '../saved/height/Past';

export default function Breakfast() {
  const value = useCallback(() => 123, []);

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
    </div>
  );
}
