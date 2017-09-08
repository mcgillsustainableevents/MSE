import React from 'react';
import { connect } from 'react-redux';
import { checkAction, nextView, setKV, viewAction } from './actions.js';
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
  Grid,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Action.css';
import TimeLabel from './TimeLabel';
import Lorem from './Lorem';

const Action = ({ action, active, handleSegmentClick, handleActionCheck }) => (
  <Segment onClick={() => handleSegmentClick(action.id)}>
    <div className="action-title">
      {
        <Checkbox
          onClick={e => {
            e.stopPropagation();
            handleActionCheck(action.id);
          }}
          checked={action.checked}
        />
      }
      <TimeLabel time={action.time} />
      <div className="title">{action.title}</div>
    </div>
    {active && (
      <div onClick={e => e.stopPropagation()}>
        <Divider />
        {Lorem}
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

export default connect(mapStateToProps, mapDispatchToProps)(Action);
