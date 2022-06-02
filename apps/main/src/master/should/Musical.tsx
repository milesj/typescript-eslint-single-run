import React, { useCallback } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';
import Ear from '../twice/Ear';
import Frequently from '../away/Frequently';

export default function Musical() {
  const handler = useCallback(() => 123, []);

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
      <Ear />
      <Frequently />
    </div>
  );
}
