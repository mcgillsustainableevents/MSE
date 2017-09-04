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
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Category.css';
import Lorem from './Lorem';
import Action from './Action';
import { actionsSelector } from './selectors';
import Category from './Category';

const CalculatorCategory = props => <Category {...props} />;

const mapStateToProps = (state, { category }) => ({
  actions: actionsSelector(state).filter(
    action => action.category === category && action.learn === false
  )
});

export default connect(mapStateToProps)(CalculatorCategory);
