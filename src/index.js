import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import axios from 'axios';

import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';
import { LoadingProvider } from './contexts/LoadingContext';

axios.defaults.baseURL = 'http://3.134.86.34:5000/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.timeout = 3000;

ReactDOM.render(
  <LoadingProvider>
    <AuthProvider>
      <MenuProvider>
        <App></App>
      </MenuProvider>
    </AuthProvider>
  </LoadingProvider>,
  document.getElementById('root')
);
