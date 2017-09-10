import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import './Category.css';
import Action from './Action';
import { actionsSelector } from './selectors';
import InapplicableActions from './InapplicableActions';

const Category = ({ category, actions, inapplicableActions }) => (
  <div className="category">
    <h1 className="category-header">{category}</h1>
    <Segment.Group>
      {actions.map(action => <Action key={action.id} action={action} />)}
      <InapplicableActions category={category} />
    </Segment.Group>
  </div>
);

const mapStateToProps = (state, { category }) => ({
  actions: actionsSelector(state).filter(
    action => action.category === category && action.learn === false && action.applicable
  ),
  inapplicableActions: actionsSelector(state).filter(
    action => action.category === category && action.learn === false && action.applicable === false
  )
});

export default connect(mapStateToProps)(Category);
