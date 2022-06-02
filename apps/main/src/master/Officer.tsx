import React, { useCallback } from 'react';
import Shoe from '../Shoe';

export default function Officer() {
  const handler = useCallback(() => 123, []);

  return (
    <div>
      <Shoe />
    </div>
  );
}
