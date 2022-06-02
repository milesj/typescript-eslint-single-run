import React, { useState } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';

export default function Lower() {
	const value = useState();

	return <div><Warn /><Start /><Trunk /><Melted /></div>;
}