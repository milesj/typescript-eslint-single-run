import React, { useCallback } from 'react';

export default function Muscle() {
  const handler = useCallback(() => 123, []);

  return <div></div>;
}
