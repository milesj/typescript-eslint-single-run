import React, { useState } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';

export default function Having() {
  const value = useState('abc');

  return (
    <div>
      <Shoe />
      <Excitement />
    </div>
  );
}
