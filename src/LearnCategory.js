import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import './Category.css';
import LearnAction from './LearnAction';
import { actionsSelector } from './selectors';

const LearnCategory = ({ category, actions }) => (
  <div className="category">
    <h1 className="category-header">{category}</h1>
    <Segment.Group>
      {actions.valueSeq().map(action => <LearnAction key={action.id} action={action} />)}
    </Segment.Group>
  </div>
);

const mapStateToProps = (state, { category }) => ({
  actions: actionsSelector(state).filter(action => action.category === category)
});

export default connect(mapStateToProps)(LearnCategory);
