import React, { useRef } from 'react';
import Shoe from '../Shoe';

export default function Globe() {
  const value = useRef('abc');

  return (
    <div>
      <Shoe />
    </div>
  );
}
