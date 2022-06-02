import React, { useEffect } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';
import Magic from '../duty/Magic';
import Softly from '../threw/Softly';

export default function Jar() {
  const value = useEffect(() => {}, []);

  return (
    <div>
      <Warn />
      <Start />
      <Trunk />
      <Melted />
      <Magic />
      <Softly />
    </div>
  );
}
