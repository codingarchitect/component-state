import React from 'react';
import { render } from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';

render(<App greeting1Visible={true} greeting2Visible={false}/>, document.getElementById('root'));