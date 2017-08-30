import React from 'react';
import { Image } from 'semantic-ui-react';
import logo from './mse_logo.svg';
import './Logo.css';

const Logo = ({ width }) => <Image width={width} className="logo" src={logo} />;

export default Logo;
