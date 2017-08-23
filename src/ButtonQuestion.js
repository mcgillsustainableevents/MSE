import React from 'react';
import { connect } from 'react-redux';
import { enableAction, nextView, setKV } from './actions.js';
import { Grid, Button } from 'semantic-ui-react';
import ProgressBar from './ProgressBar';
import Centered from './Centered';
import QuestionHeader from './QuestionHeader';
import Responsive from 'react-responsive';

const ButtonQuestion = props => {
  const formatButton = (button, i) => {
    return (
      <Responsive maxDeviceWidth={480} key={i}>
        {matches => {
          return (
            <Grid.Column>
              <Button
                fluid
                size={matches ? 'medium' : 'huge'}
                onClick={() => {
                  props.setKV(button.kv[0], button.kv[1]);
                  props.enableActions(button.enable);
                }}
              >
                {button.text}
              </Button>
            </Grid.Column>
          );
        }}
      </Responsive>
    );
  };
  return (
    <Centered>
      <QuestionHeader question={props.question} />
      <Grid columns={props.buttons.length}>
        {props.buttons.map(formatButton)}
      </Grid>
      <ProgressBar />
    </Centered>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    enableActions: ids => {
      ids.map(id => dispatch(enableAction(id)));
      dispatch(nextView());
    },
    setKV: (key, value) => dispatch(setKV(key, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonQuestion);
