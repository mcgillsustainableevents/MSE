import React from 'react';
import { Button } from 'semantic-ui-react';
import CalculatorCategory from './CalculatorCategory';
import './Calculator.css';
import { Link } from 'react-router-dom';
import Points from './Points';
import Logo from './Logo';
import scrollToTop from './ScrollToTop';
import { Icon, Segment } from 'semantic-ui-react';

const Calculator = ({ pointsNumerator, pointsDenominator }) => (
  <div className="calculator">
    <Logo width={500} />
    <p className="calculator-copy">
      Below you’ll find the actions that comprise our certification criteria. Each action is worth 1
      or 2 points, which are tallied to determine an event’s level of certification. Based on your
      questionnaire responses, you may find some actions are labeled inapplicable. Click on an
      action to drop down more information, and identify which actions you either plan to complete,
      or have completed, by ticking the box next to it!
    </p>
    <Segment className="calculator-key">
      <div>
        <Icon size="large" name="clock" color="green" />= Lower time commitment
      </div>
      <div>
        <Icon size="large" name="clock" color="yellow" />= Medium time commitment
      </div>
      <div>
        <Icon size="large" name="clock" color="red" />= Higher time commitment
      </div>
    </Segment>
    <CalculatorCategory category="Early Planning Phase" />
    <CalculatorCategory category="Equity" />
    <CalculatorCategory category="Location" />
    <CalculatorCategory category="Waste" />
    <CalculatorCategory category="Communication" />
    <CalculatorCategory category="Food" />
    <CalculatorCategory category="Procurement" />
    <CalculatorCategory category="Travel and Transport" />
    <Points />
    <Link to="/submit">
      <Button fluid>Next</Button>
    </Link>
  </div>
);

export default scrollToTop(Calculator);
