import React, { useRef } from 'react';
import Warn from '../../Warn';
import Start from '../Start';

export default function Broke() {
  const value = useRef();

  return (
    <div>
      <Warn />
      <Start />
    </div>
  );
}
