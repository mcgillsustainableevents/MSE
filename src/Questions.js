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
import { Route, Switch, MemoryRouter, Redirect } from 'react-router-dom';
import Landing from './Landing';
import { withRouter } from 'react-router';

const questions = [
  { question: 'What is your name?', controls: <TextInput valueKey="name" /> },
  { question: 'What is your email?', controls: <TextInput valueKey="email" /> },
  { question: 'What is your event name?', controls: <TextInput valueKey="eventName" /> },
  { question: 'Where will your event be held?', controls: <TextInput valueKey="location" /> },
  { question: 'When is your event?', controls: <TextInput valueKey="date" /> },
  { question: 'How many people will be attending?', controls: <TextInput valueKey="amount" /> },
  {
    question: 'Will you be serving food or beverages?',
    controls: (
      <Buttons
        buttons={[
          { text: 'Yes', enable: [25, 26, 27, 28, 29, 30], kv: ['food', true] },
          { text: 'No', enable: [], kv: ['food', false] }
        ]}
      />
    )
  },
  {
    question: 'Is your event sponsored?',
    controls: (
      <Buttons
        buttons={[
          { text: 'Yes', enable: [1], kv: ['sponsored', true] },
          { text: 'No', enable: [], kv: ['sponsored', false] }
        ]}
      />
    )
  },
  {
    question: 'Will you be buying any supplies?',
    controls: (
      <Buttons
        buttons={[
          { text: 'Yes', enable: [22, 23, 24], kv: ['supplies', true] },
          { text: 'No', enable: [], kv: ['supplies', false] }
        ]}
      />
    )
  },
  {
    question:
      'Will you be printing, creating or purchasing materials for distribution or promotion?',
    controls: (
      <Buttons
        buttons={[
          { text: 'Yes', enable: [33, 34], kv: ['materials', true] },
          { text: 'No', enable: [], kv: ['materials', false] }
        ]}
      />
    )
  },
  {
    question: 'Are you charging for entrance to your event?',
    controls: (
      <Buttons
        buttons={[
          { text: 'Yes', enable: [6], kv: ['charging', true] },
          { text: 'No', enable: [], kv: ['charging', false] }
        ]}
      />
    )
  },
  {
    question: 'Does your event include small-group discussions?',
    controls: (
      <Buttons
        buttons={[
          { text: 'Yes', enable: [18, 21], kv: ['discussions', true] },
          { text: 'No', enable: [], kv: ['discussions', false] }
        ]}
      />
    )
  }
];

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentQuestion };
  }


  render() {

    questions[this.state.currentQuestion]
  }
}
export default Questions;
