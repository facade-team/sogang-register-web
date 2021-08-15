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

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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
