import React, { useEffect } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';

export default function Short() {
	const value = useEffect(() => {}, []);

	return <div><Warn /><Start /><Trunk /></div>;
}