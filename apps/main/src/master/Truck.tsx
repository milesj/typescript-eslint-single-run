import React, { useRef } from 'react';
import Shoe from '../Shoe';

export default function Truck() {
  const value = useRef('abc');

  return (
    <div>
      <Shoe />
    </div>
  );
}
