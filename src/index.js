import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import axios from 'axios';

import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { SnackBarProvider } from './contexts/SnackBarContext';
import { SubjectProvider } from './contexts/SubjectContext';
import { LatestSubjectsProvider } from './contexts/LatestSubjectsContext';
require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  // yarn start (개발용 API 서버)
  axios.defaults.baseURL = process.env.REACT_APP_API_URL_DEV;
} else {
  // yarn build (배포용 API 서버)
  axios.defaults.baseURL = process.env.REACT_APP_API_URL_PROD;
}

axios.defaults.timeout = 5000;

ReactDOM.render(
  <LoadingProvider>
    <SnackBarProvider>
      <LatestSubjectsProvider>
        <AuthProvider>
          <MenuProvider>
            <SubjectProvider>
              <App></App>
            </SubjectProvider>
          </MenuProvider>
        </AuthProvider>
      </LatestSubjectsProvider>
    </SnackBarProvider>
  </LoadingProvider>,
  document.getElementById('root')
);
