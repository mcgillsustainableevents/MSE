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

const InapplicableAction = ({ action, active, handleSegmentClick, handleActionCheck }) => (
  <Segment onClick={e => {e.stopPropagation(); handleSegmentClick(action.id)}}>
    <div className="action-title">
      <div className="title">
        <Label horizontal>N/A</Label>
        {action.title}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InapplicableAction);
