import React from 'react';
import { connect } from 'react-redux';
import { enableAction, nextView, setKV } from './actions.js';
import { Grid, Button } from 'semantic-ui-react';
import ProgressBar from './ProgressBar';
import Centered from './Centered';
import QuestionHeader from './QuestionHeader';
import Responsive from 'react-responsive';
import { withRouter } from 'react-router';
import './Buttons.css';

const Buttons = ({ onYesClick, onNoClick }) => (
  <div className="buttons">
    <Button fluid size="huge" onClick={onYesClick}>
      Yes
    </Button>
    <Button fluid size="huge" onClick={onNoClick}>
      No
    </Button>
  </div>
);

const mapDispatchToProps = (dispatch, { history, enable, to, valueKey }) => {
  return {
    onYesClick: () => {
      enable.map(id => dispatch(enableAction(id)));
      dispatch(setKV(valueKey, true));
      history.replace(to);
    },
    onNoClick: () => {
      dispatch(setKV(valueKey, false));
      history.replace(to);
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Buttons));
