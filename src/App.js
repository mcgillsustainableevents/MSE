import React from 'react';
import { connect } from 'react-redux';
import Calculator from './Calculator.js';
import ButtonQuestion from './ButtonQuestion.js';
import TextInput from './TextInput.js';
import DateInput from './DateInput.js';
import AmountInput from './AmountInput.js';
import Submit from './Submit.js';
import Complete from './Complete.js';
import Question from './Question';

const views = [
  <Question key={1} question="What is your name?">
    <TextInput valueKey="name" />
  </Question>,
  <Question key={2} question="What is your email?">
    <TextInput valueKey="email" />
  </Question>,
  <Question key={3} question="What is your event name?">
    <TextInput valueKey="eventName" />
  </Question>,
  <Question
    key={4}
    question="Where will your event be held?"
    valueKey="location"
  >
    <TextInput valueKey="location" />
  </Question>,
  <Question key={5} question="When is your event?">
    <DateInput valueKey="date" />
  </Question>,
  <Question key={6} question="How many people will be attending?">
    <AmountInput valueKey="amount" />
  </Question>,
  <ButtonQuestion
    key={7}
    question="Will you be serving food or beverages?"
    buttons={[
      { text: 'Yes', enable: [25, 26, 27, 28, 29, 30], kv: ['food', true] },
      { text: 'No', enable: [], kv: ['food', false] }
    ]}
  />,
  <ButtonQuestion
    key={8}
    question="Is your event sponsored?"
    buttons={[
      { text: 'Yes', enable: [1], kv: ['sponsored', true] },
      { text: 'No', enable: [], kv: ['sponsored', false] }
    ]}
  />,
  <ButtonQuestion
    key={9}
    question="Will you be buying any supplies?"
    buttons={[
      { text: 'Yes', enable: [22, 23, 24], kv: ['supplies', true] },
      { text: 'No', enable: [], kv: ['supplies', false] }
    ]}
  />,
  <ButtonQuestion
    key={10}
    question="Will you be printing, creating or purchasing materials for distribution or promotion?"
    buttons={[
      { text: 'Yes', enable: [33, 34], kv: ['materials', true] },
      { text: 'No', enable: [], kv: ['materials', false] }
    ]}
  />,
  <ButtonQuestion
    key={11}
    question="Are you charging for entrance to your event?"
    buttons={[
      { text: 'Yes', enable: [6], kv: ['charging', true] },
      { text: 'No', enable: [], kv: ['charging', false] }
    ]}
  />,
  <ButtonQuestion
    key={12}
    question="Does your event include small-group discussions?"
    buttons={[
      { text: 'Yes', enable: [18, 21], kv: ['discussions', true] },
      { text: 'No', enable: [], kv: ['discussions', false] }
    ]}
  />,
  <Calculator />,
  <Submit />,
  <Complete />
];

const App = props => views[props.currentView];

const mapStateToProps = state => {
  return {
    currentView: state.currentView
  };
};

export default connect(mapStateToProps)(App);
