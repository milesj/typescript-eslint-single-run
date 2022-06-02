import React, { useCallback } from 'react';
import Warn from '../../Warn';
import Start from '../../saved/Start';
import Trunk from '../../saved/type/Trunk';
import Melted from '../../saved/milk/Melted';
import Magic from '../../saved/duty/Magic';
import Softly from '../../saved/threw/Softly';
import Which from '../../saved/strip/Which';
import Past from '../../saved/height/Past';
import Young from '../Young';
import They from '../kill/They';
import Rate from '../ask/Rate';

export default function Introduced() {
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
      <Young />
      <They />
      <Rate />
    </div>
  );
}
