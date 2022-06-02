import React, { useState } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';

export default function Fighting() {
  const value = useState();

  return (
    <div>
      <Warn />
      <Start />
      <Trunk />
    </div>
  );
}
