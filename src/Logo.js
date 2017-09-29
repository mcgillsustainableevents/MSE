import React from 'react';
import { Image } from 'semantic-ui-react';
import logo from './mse_logo.svg';
import './Logo.css';
import { withRouter } from 'react-router';

const Logo = ({ width, history }) => <div onClick={() => history.push('/')} ><Image width={width} className="logo" src={logo} /></div>;

export default withRouter(Logo);
