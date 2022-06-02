import React, { useMemo } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';

export default function Poem() {
  const handler = useMemo(() => 123, []);

  return (
    <div>
      <Shoe />
      <Excitement />
    </div>
  );
}
