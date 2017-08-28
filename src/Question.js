import React from 'react';
import ProgressBar from './ProgressBar';
import Centered from './Centered';
import QuestionHeader from './QuestionHeader';

const Question = ({ question, controls }) =>
  <Centered>
    <QuestionHeader question={question} />
    {controls}
    <ProgressBar />
  </Centered>;

export default Question;
