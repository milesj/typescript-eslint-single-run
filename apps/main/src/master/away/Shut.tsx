import React, { useCallback } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';
import Ear from '../twice/Ear';

export default function Shut() {
  const handler = useCallback(() => 123, []);

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
      <Ear />
    </div>
  );
}
