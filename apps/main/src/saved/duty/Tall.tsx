import React, { useMemo } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';

export default function Tall() {
  const value = useMemo(() => 123, []);

  return (
    <div>
      <Warn />
      <Start />
      <Trunk />
      <Melted />
    </div>
  );
}
