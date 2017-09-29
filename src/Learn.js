import React from 'react';
import LearnCategory from './LearnCategory';
import './Calculator.css';
import Logo from './Logo';

const Calculator = () => (
  <div className="calculator">
    <Logo width={500}/>
    <p className="calculator-copy">
      {`Below you’ll find the actions that comprise our certification criteria. Click on an action to drop down more information!`}
    </p>
    <LearnCategory category="Early Planning Phase" />
    <LearnCategory category="Location" />
    <LearnCategory category="Travel and Transport" />
    <LearnCategory category="Equity" />
    <LearnCategory category="Procurement" />
    <LearnCategory category="Food" />
    <LearnCategory category="Waste" />
    <LearnCategory category="Communication" />
  </div>
);

export default Calculator;
