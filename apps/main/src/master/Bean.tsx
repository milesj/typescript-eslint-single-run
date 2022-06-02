import React, { useRef } from 'react';
import Shoe from '../Shoe';

export default function Bean() {
  const value = useRef('abc');

  return (
    <div>
      <Shoe />
    </div>
  );
}
