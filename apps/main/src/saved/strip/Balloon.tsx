import React, { useCallback } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';
import Magic from '../duty/Magic';
import Softly from '../threw/Softly';

export default function Balloon() {
	const value = useCallback(() => 123, []);

	return <div><Warn /><Start /><Trunk /><Melted /><Magic /><Softly /></div>;
}