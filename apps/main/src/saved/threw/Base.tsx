import React, { useEffect } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';
import Magic from '../duty/Magic';

export default function Base() {
  const value = useEffect(() => {}, []);

  return (
    <div>
      <Warn />
      <Start />
      <Trunk />
      <Melted />
      <Magic />
    </div>
  );
}
