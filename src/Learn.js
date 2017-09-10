import React from 'react';
import { Image } from 'semantic-ui-react';
import logo from './mse_logo.svg';
import LearnCategory from './LearnCategory';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <Image width={500} className="logo" src={logo} />
    <p className="calculator-copy">
      {`Below you’ll find the actions that comprise our certification criteria. Click on an action to drop down more information!`}
    </p>
    <LearnCategory category="Planning Phase" />
    <LearnCategory category="Equity" />
  </div>
);

export default Calculator;
