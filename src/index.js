import React from 'react';
import ReactDOM from 'react-dom';

import MessageBox from './MessageBox'

import './index.css'

ReactDOM.render(
  <MessageBox />,
  document.getElementById('root'),
  () => console.log("READY")
);
