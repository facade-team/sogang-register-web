import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import axios from 'axios';

import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { SnackBarProvider } from './contexts/SnackBarContext';

axios.defaults.baseURL = 'http://3.130.245.129:5000/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.timeout = 3000;

ReactDOM.render(
  <LoadingProvider>
    <SnackBarProvider>
      <AuthProvider>
        <MenuProvider>
          <App></App>
        </MenuProvider>
      </AuthProvider>
    </SnackBarProvider>
  </LoadingProvider>,
  document.getElementById('root')
);
