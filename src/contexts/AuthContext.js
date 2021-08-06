import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(0); // 일부러 숫자로 설정한 이유가 있음
  const [authLoading, setAuthLoading] = useState(false);

  // user : 사용자가 입력한 id, password 객체
  const login = (user) => {
    setAuthLoading(true);
    axios
      .post('/auth/login', user)
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
          setIsAuth(true);
          // const ud = {
          //   email: res.data.data.email,
          //   username: res.data.data.username,
          //   major: res.data.data.major,
          // };
          // setUserData(ud);
          // localStorage.setItem('userData', JSON.stringify(ud));
          localStorage.setItem('token', res.data.Authorization);
        }
      })
      .then((res) => {
        axios
          .get('/user')
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        setAuthLoading(false);
      })
      .catch((err) => {
        // if (err.response.status === 403) {
        // 이메일이나 패스워드 잘못 입력
        setError(error + 1);
        setAuthLoading(false);
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
    authLoading,
    setUserData,
    setIsAuth,
    setAuthLoading,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
