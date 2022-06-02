import React, { useEffect } from 'react';
import Warn from '../../Warn';
import Start from '../Start';

export default function Situation() {
  const value = useEffect(() => {}, []);

  return (
    <div>
      <Warn />
      <Start />
    </div>
  );
}
