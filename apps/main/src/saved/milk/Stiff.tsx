import React, { useRef } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';

export default function Stiff() {
	const value = useRef();

	return <div><Warn /><Start /><Trunk /></div>;
}