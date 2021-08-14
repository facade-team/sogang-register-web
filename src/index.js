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
<<<<<<< HEAD
=======
// axios.defaults.timeout = 10000;
>>>>>>> 0d1831b5306d26414f09bd74f32d03de518c31cb

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
