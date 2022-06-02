import React, { useMemo } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';

export default function Student() {
  const value = useMemo(() => 123, []);

  return (
    <div>
      <Warn />
      <Start />
      <Trunk />
    </div>
  );
}
