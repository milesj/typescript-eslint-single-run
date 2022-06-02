import React, { useMemo } from 'react';
import Shoe from '../Shoe';

export default function Worker() {
  const handler = useMemo(() => 123, []);

  return (
    <div>
      <Shoe />
    </div>
  );
}
