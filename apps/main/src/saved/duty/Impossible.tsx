import React, { useEffect } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';

export default function Impossible() {
	const value = useEffect(() => {}, []);

	return <div><Warn /><Start /><Trunk /><Melted /></div>;
}