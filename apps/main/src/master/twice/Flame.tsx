import React, { useMemo } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';

export default function Flame() {
  const handler = useMemo(() => 123, []);

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
    </div>
  );
}
