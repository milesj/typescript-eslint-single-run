import React, { useRef } from 'react';
import Warn from '../Warn';

export default function Yes() {
  const value = useRef();

  return (
    <div>
      <Warn />
    </div>
  );
}
