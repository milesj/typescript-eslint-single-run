import React, { useEffect } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';

export default function Minute() {
  useEffect(() => {}, []);

  return (
    <div>
      <Shoe />
      <Excitement />
    </div>
  );
}
