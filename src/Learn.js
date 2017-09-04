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
import Category from './Category';
import logo from './mse_logo.svg';
import './Calculator.css';
import { Link } from 'react-router-dom';
import LearnCategory from './LearnCategory';

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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, null)(Calculator);
