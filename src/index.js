import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import axios from 'axios';

import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { SnackBarProvider } from './contexts/SnackBarContext';
import { SubjectProvider } from './contexts/SubjectContext';

axios.defaults.baseURL = 'http://3.130.245.129:80/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.timeout = 10000;

ReactDOM.render(
  <LoadingProvider>
    <SnackBarProvider>
      <AuthProvider>
        <MenuProvider>
          <SubjectProvider>
            <App></App>
          </SubjectProvider>
        </MenuProvider>
      </AuthProvider>
    </SnackBarProvider>
  </LoadingProvider>,
  document.getElementById('root')
);
