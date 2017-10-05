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
    <LearnCategory category="Equity" />
    <LearnCategory category="Location" />
    <LearnCategory category="Waste" />
    <LearnCategory category="Communication" />
    <LearnCategory category="Food" />
    <LearnCategory category="Procurement" />
    <LearnCategory category="Travel and Transport" />
  </div>
);

export default Calculator;
