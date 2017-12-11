import React from 'react';
import { connect } from 'react-redux';
import { checkAction, viewAction } from './actions.js';
import { Divider, Segment, Label } from 'semantic-ui-react';
import './Action.css';

const InapplicableAction = ({ action, active, handleSegmentClick, handleActionCheck }) => (
  <Segment
    onClick={e => {
      e.stopPropagation();
      handleSegmentClick(action.id);
    }}
  >
    <div className="action-title">
      <div className="title">
        <Label horizontal>N/A</Label>
        {action.title}
      </div>
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
    data: state.data
  };
};

const mapDispatchToProps = { handleSegmentClick: viewAction, handleActionCheck: checkAction };

export default connect(mapStateToProps, mapDispatchToProps)(InapplicableAction);
