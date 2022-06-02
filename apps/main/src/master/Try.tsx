import React, { useMemo } from 'react';
import Shoe from '../Shoe';

export default function Try() {
  const handler = useMemo(() => 123, []);

  return (
    <div>
      <Shoe />
    </div>
  );
}
