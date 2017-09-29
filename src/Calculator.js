import React from 'react';
import { Button } from 'semantic-ui-react';
import CalculatorCategory from './CalculatorCategory';
import './Calculator.css';
import { Link } from 'react-router-dom';
import Points from './Points';
import Logo from './Logo';

const Calculator = ({ pointsNumerator, pointsDenominator }) => (
  <div className="calculator">
    <Logo width={500} />
    <p className="calculator-copy">
      {`Below you’ll find the actions that comprise our certification criteria. Each action is
    worth 1 or 2 points, which are tallied to determine an event’s level of certification.
    Based on your questionnaire responses, you may find some actions are labeled
    inapplicable. Click on an action to drop down more information!`}
    </p>
    <CalculatorCategory category="Early Planning Phase" />
    <CalculatorCategory category="Location" />
    <CalculatorCategory category="Travel and Transport" />
    <CalculatorCategory category="Equity" />
    <CalculatorCategory category="Procurement" />
    <CalculatorCategory category="Food" />
    <CalculatorCategory category="Waste" />
    <CalculatorCategory category="Communication" />
    <Points />
    <Link to="/submit">
      <Button fluid>Next</Button>
    </Link>
  </div>
);

export default Calculator;
