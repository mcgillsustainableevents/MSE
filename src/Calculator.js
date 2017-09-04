import React from 'react';
import { connect } from 'react-redux';
import { switchAction, nextView, setKV } from './actions.js';
import {
  Button,
  Image,
  Statistic,
  Header,
  Container,
  Divider,
  Segment,
  Label,
  Checkbox,
  List,
  Grid
} from 'semantic-ui-react';
import CalculatorCategory from './CalculatorCategory';
import logo from './mse_logo.svg';
import './Calculator.css';
import { Link } from 'react-router-dom';
import Points from './Points';

const Calculator = ({pointsNumerator, pointsDenominator}) => (
  <div className="calculator">
    <Image width={500} className="logo" src={logo} />
    <p className="calculator-copy">
      {`Below you’ll find the actions that comprise our certification criteria. Each action is
    worth 1 or 2 points, which are tallied to determine an event’s level of certification.
    Based on your questionnaire responses, you may find some actions are labeled
    inapplicable. Click on an action to drop down more information!`}
    </p>
    <CalculatorCategory category="Planning Phase" />
    <CalculatorCategory category="Equity" />
    <Points />
    <Link to="/submit">
      <Button fluid>Next</Button>
    </Link>
  </div>
);

export default Calculator;
