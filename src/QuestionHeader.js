import React from 'react';
import './QuestionHeader.css';

const QuestionText = ({ question }) =>
  <h1 className="question-header">
    {question}
  </h1>;

export default QuestionText;
