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
      Before you meet with our Sustainable Event Consultant team to get your official certification score, please identify which actions you will complete by ticking the box next to it. This will give you an idea of your unofficial score and will be verified by our team during your meeting. <strong>Click on an action to drop down more information.</strong> Don’t forget to press submit on the next page when you’re done.
    </p>
    <Segment className="calculator-key">
      <div>
        <Icon size="large" name="clock" color="green" />= Lower time commitment
      </div>
      <div>
        <Icon size="large" name="clock" color="yellow" />= Medium time
        commitment
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
