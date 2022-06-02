import React, { useCallback } from 'react';
import Warn from '../../Warn';
import Start from '../Start';

export default function Trunk() {
	const value = useCallback(() => 123, []);

	return <div><Warn /><Start /></div>;
}