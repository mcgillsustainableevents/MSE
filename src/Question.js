import React from 'react';
import ProgressBar from './ProgressBar';
import Centered from './Centered';
import QuestionHeader from './QuestionHeader';

const Question = ({ question, number, controls }) =>
  <Centered>
    <QuestionHeader question={question} />
    {controls}
    <ProgressBar value={number} />
  </Centered>;

export default Question;
