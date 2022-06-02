import React, { useCallback } from 'react';

export default function Warn() {
  const value = useCallback(() => 123, []);

  return <div></div>;
}
