import React, { useCallback } from 'react';

export default function Element() {
  const handler = useCallback(() => 123, []);

  return <div></div>;
}
