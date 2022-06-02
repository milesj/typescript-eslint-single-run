import React, { useRef } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';
import Ear from '../twice/Ear';

export default function Mean() {
  const value = useRef('abc');

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
      <Ear />
    </div>
  );
}
