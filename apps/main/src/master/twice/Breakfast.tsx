import React, { useRef } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';

export default function Breakfast() {
  const value = useRef('abc');

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
    </div>
  );
}
