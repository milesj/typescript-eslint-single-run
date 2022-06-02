import React, { useState } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';

export default function Dig() {
  const value = useState('abc');

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
    </div>
  );
}
