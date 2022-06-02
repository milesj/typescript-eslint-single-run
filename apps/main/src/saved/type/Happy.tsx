import React, { useState } from 'react';
import Warn from '../../Warn';
import Start from '../Start';

export default function Happy() {
	const value = useState();

	return <div><Warn /><Start /></div>;
}