import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import axios from 'axios';

import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { SnackBarProvider } from './contexts/SnackBarContext';
import { SubjectProvider } from './contexts/SubjectContext';
import { LatestSubjectsProvider } from './contexts/LatestSubjectsContext';

axios.defaults.baseURL = 'http://api.sogang-sincheong.com';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.timeout = 5000;

ReactDOM.render(
  <LoadingProvider>
    <SnackBarProvider>
      <AuthProvider>
        <MenuProvider>
          <SubjectProvider>
            <LatestSubjectsProvider>
              <App></App>
            </LatestSubjectsProvider>
          </SubjectProvider>
        </MenuProvider>
      </AuthProvider>
    </SnackBarProvider>
  </LoadingProvider>,
  document.getElementById('root')
);
