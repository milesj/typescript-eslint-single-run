import React, { useState } from 'react';
import Shoe from '../Shoe';
import Excitement from '../master/Excitement';
import Threw from '../master/include/Threw';
import Ear from '../master/twice/Ear';
import Frequently from '../master/away/Frequently';
import Hello from '../master/should/Hello';
import Knife from '../master/grass/Knife';
import Greater from '../master/bow/Greater';

export default function Habit() {
  const value = useState('abc');

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
      <Ear />
      <Frequently />
      <Hello />
      <Knife />
      <Greater />
    </div>
  );
}
