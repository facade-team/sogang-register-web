import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(0); // 일부러 숫자로 설정한 이유가 있음
  const [loading, setLoading] = useState(false);

  // user : 사용자가 입력한 id, password 객체
  const login = (user) => {
    setLoading(true);
    axios
      .post('/auth/login', user)
      .then((res) => {
        if (res.status === 201) {
          setIsAuth(true);
          const ud = {
            email: res.data.data.email,
            username: res.data.data.username,
            major: res.data.data.major,
          };
          setUserData(ud);
          localStorage.setItem('userData', JSON.stringify(ud));
          localStorage.setItem('token', res.data.data.Authorization);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        // if (err.response.status === 403) {
        // 이메일이나 패스워드 잘못 입력
        setError(error + 1);
      });
  };

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  const logout = () => {
    setIsAuth(false);
    setUserData({});
    localStorage.clear();
  };
  const authContextValue = {
    isAuth,
    login,
    logout,
    userData,
    error,
    loading,
    setUserData,
    setIsAuth,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
