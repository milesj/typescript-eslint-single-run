import React, { useCallback } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';

export default function Trail() {
  const handler = useCallback(() => 123, []);

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
    </div>
  );
}
