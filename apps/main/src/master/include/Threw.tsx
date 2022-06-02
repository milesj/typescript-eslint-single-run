import React, { useRef } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';

export default function Threw() {
  const value = useRef('abc');

  return (
    <div>
      <Shoe />
      <Excitement />
    </div>
  );
}
