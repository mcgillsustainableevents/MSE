import React from 'react';
import './Centered.css';

const Centered = ({ children }) => (
  <div className="centered-container">
    <div className="centered-child">{children}</div>
  </div>
);

export default Centered;
