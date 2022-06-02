import React, { useEffect } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';

export default function Winter() {
  useEffect(() => {}, []);

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
    </div>
  );
}
