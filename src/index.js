import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://18.119.13.125:5000';

ReactDOM.render(
  <App />,

  document.getElementById('root')
);
