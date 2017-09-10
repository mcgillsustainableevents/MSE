import React from 'react';
import { connect } from 'react-redux';
import { actionsSelector } from './selectors';
import Category from './Category';

const CalculatorCategory = props => <Category {...props} />;

const mapStateToProps = (state, { category }) => ({
  actions: actionsSelector(state).filter(
    action => action.category === category && action.learn === false
  )
});

export default connect(mapStateToProps)(CalculatorCategory);
