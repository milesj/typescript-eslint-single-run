import React, { useCallback } from 'react';
import Warn from '../Warn';

export default function Life() {
  const value = useCallback(() => 123, []);

  return (
    <div>
      <Warn />
    </div>
  );
}
