import React, { useCallback } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';

export default function Smallest() {
  const value = useCallback(() => 123, []);

  return (
    <div>
      <Warn />
      <Start />
      <Trunk />
    </div>
  );
}
