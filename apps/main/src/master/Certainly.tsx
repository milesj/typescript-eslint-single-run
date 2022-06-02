import React, { useMemo } from 'react';
import Shoe from '../Shoe';

export default function Certainly() {
  const handler = useMemo(() => 123, []);

  return (
    <div>
      <Shoe />
    </div>
  );
}
