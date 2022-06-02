import React, { useRef } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';

export default function Everything() {
  const value = useRef();

  return (
    <div>
      <Warn />
      <Start />
      <Trunk />
      <Melted />
    </div>
  );
}
