import React, { useState } from 'react';
import Warn from '../../Warn';
import Start from '../Start';
import Trunk from '../type/Trunk';
import Melted from '../milk/Melted';
import Magic from '../duty/Magic';
import Softly from '../threw/Softly';
import Which from '../strip/Which';

export default function Tales() {
	const value = useState();

	return <div><Warn /><Start /><Trunk /><Melted /><Magic /><Softly /><Which /></div>;
}