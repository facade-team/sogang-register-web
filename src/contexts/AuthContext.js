import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  // user : 사용자가 입력한 id, password 객체
  const login = (user) => {
    // setIsAuth(true);
    axios
      .post('/auth/login', user)
      .then((res) => {
        console.log(1, res);
        // if(res.status) {
        //   setIsAuth(true)
        //    localStorage.setItem('token', )
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  const logout = () => {
    setIsAuth(false);
    setUserData({});
    console.log('logout');
  };
  const authContextValue = {
    isAuth,
    login,
    logout,
    userData,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
