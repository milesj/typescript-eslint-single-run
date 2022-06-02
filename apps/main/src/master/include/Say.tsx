import React, { useCallback } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';

export default function Say() {
  const handler = useCallback(() => 123, []);

  return (
    <div>
      <Shoe />
      <Excitement />
    </div>
  );
}
