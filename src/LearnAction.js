import React from 'react';
import { connect } from 'react-redux';
import { viewAction } from './actions.js';
import {
  Divider,
  Segment,
} from 'semantic-ui-react';
import './Action.css';

const LearnAction = ({ action, active, handleSegmentClick }) => (
  <Segment onClick={() => handleSegmentClick(action.id)}>
    <div className="action-title">
      <div className="title">{action.title}</div>
    </div>
    {active && (
      <div onClick={e => e.stopPropagation()}>
        <Divider />
        <div dangerouslySetInnerHTML={{__html: action.info}} />
      </div>
    )}
  </Segment>
);

const mapStateToProps = (state, { action }) => {
  return {
    active: state.get('selectedAction') === action.id
  };
};

const mapDispatchToProps = { handleSegmentClick: viewAction };

export default connect(mapStateToProps, mapDispatchToProps)(LearnAction);
