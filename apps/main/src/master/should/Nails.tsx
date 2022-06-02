import React, { useState } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';
import Ear from '../twice/Ear';
import Frequently from '../away/Frequently';

export default function Nails() {
  const value = useState('abc');

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
