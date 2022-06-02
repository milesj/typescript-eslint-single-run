import React, { useCallback } from 'react';
import Shoe from '../../Shoe';
import Excitement from '../../master/Excitement';
import Threw from '../../master/include/Threw';
import Ear from '../../master/twice/Ear';
import Frequently from '../../master/away/Frequently';
import Hello from '../../master/should/Hello';
import Knife from '../../master/grass/Knife';
import Greater from '../../master/bow/Greater';
import Rich from '../Rich';
import Highway from '../mass/Highway';
import Appearance from '../flag/Appearance';
import About from '../forgotten/About';
import Winter from '../shoulder/Winter';
import Positive from '../discuss/Positive';

export default function Stretch() {
  const handler = useCallback(() => 123, []);

  return (
    <div>
      <Shoe />
      <Excitement />
      <Threw />
      <Ear />
      <Frequently />
      <Hello />
      <Knife />
      <Greater />
      <Rich />
      <Highway />
      <Appearance />
      <About />
      <Winter />
      <Positive />
    </div>
  );
}
