import React from 'react';
import { connect } from 'react-redux';
import { enableAction, nextView, setKV } from './actions.js';
import { Grid, Button } from 'semantic-ui-react';
import ProgressBar from './ProgressBar';
import Centered from './Centered';
import QuestionHeader from './QuestionHeader';
import Responsive from 'react-responsive';
import { withRouter } from 'react-router';

const Buttons = props =>
  <div style={{display: 'flex'}}>
    <Button fluid size={'huge'} onClick={() => props.history.replace(props.to)}>
      Yes
    </Button>
    <Button fluid size={'huge'} onClick={() => props.history.replace(props.to)}>
      No
    </Button>
  </div>;

const mapDispatchToProps = dispatch => {
  return {
    enableActions: ids => {
      ids.map(id => dispatch(enableAction(id)));
      dispatch(nextView());
    },
    setKV: (key, value) => dispatch(setKV(key, value))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Buttons));
