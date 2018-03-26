import React from 'react';
import { connect } from 'react-redux';
import { checkAction, viewAction } from './actions.js';
import { Divider, Segment, Checkbox } from 'semantic-ui-react';
import TimeLabel from './TimeLabel';
import './Action.css';

const Action = ({ action, active, handleActionClick, handleActionCheck }) => (
  <Segment onClick={handleActionClick}>
    <div className="action-title">
      <Checkbox onClick={handleActionCheck} checked={action.checked} />
      <TimeLabel time={action.time} />
      <div className="title">{action.title}</div>
    </div>
    {active && (
      <div onClick={e => e.stopPropagation()}>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: action.info }} />
      </div>
    )}
  </Segment>
);

const mapStateToProps = (state, { action }) => {
  return {
    active: state.get('selectedAction') === action.id,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch, { action }) => ({
  handleActionClick: () => dispatch(viewAction(action.id)),
  handleActionCheck: e => {
    e.stopPropagation();
    dispatch(checkAction(action.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Action);
