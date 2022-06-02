import React, { useState } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';
import Ear from '../twice/Ear';
import Frequently from '../away/Frequently';
import Hello from '../should/Hello';

export default function Bit() {
  const value = useState('abc');

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
      <Ear />
      <Frequently />
      <Hello />
    </div>
  );
}
