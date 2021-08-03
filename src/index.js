import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import axios from 'axios';

import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';

axios.defaults.baseURL = 'http://18.119.13.125:5000';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token'
)}`;

ReactDOM.render(
  <AuthProvider>
    <MenuProvider>
      <App></App>
    </MenuProvider>
  </AuthProvider>,
  document.getElementById('root')
);
