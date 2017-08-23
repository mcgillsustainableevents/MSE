import React from 'react';
import ProgressBar from './ProgressBar';
import Centered from './Centered';
import QuestionHeader from './QuestionHeader';

const Question = ({ question, children }) =>
  <Centered>
    <QuestionHeader question={question} />
    {children}
    <ProgressBar />
  </Centered>;

export default Question;
