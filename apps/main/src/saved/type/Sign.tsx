import React, { useCallback } from 'react';
import Warn from '../../Warn';
import Start from '../Start';

export default function Sign() {
	const value = useCallback(() => 123, []);

	return <div><Warn /><Start /></div>;
}