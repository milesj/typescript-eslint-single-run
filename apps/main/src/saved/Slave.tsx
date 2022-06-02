import React, { useMemo } from 'react';
import Warn from '../Warn';

export default function Slave() {
  const value = useMemo(() => 123, []);

  return (
    <div>
      <Warn />
    </div>
  );
}
