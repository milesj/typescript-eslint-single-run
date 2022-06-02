import React, { useEffect } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../Excitement';
import Threw from '../include/Threw';
import Ear from '../twice/Ear';

export default function Production() {
  useEffect(() => {}, []);

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
      <Ear />
    </div>
  );
}
