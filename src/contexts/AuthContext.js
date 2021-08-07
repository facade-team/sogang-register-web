import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [snackBar, setSnackBar] = useState(false);
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
          const ud = {
            email: res.data.data.email,
            username: res.data.data.username,
            major: res.data.data.major,
            allowEmail: res.data.data.allow_email,
            isVerified: res.data.data.verify_on,
          };
          setUserData(ud);
          localStorage.setItem('userData', JSON.stringify(ud));
          localStorage.setItem('token', res.data.data.Authorization);
        }
        // 이메일 인증은 안됐지만 로그인 성공
        if (res.status === 202) {
          console.log(res);
          setIsAuth(true);
          const ud = {
            email: res.data.data.email,
            username: res.data.data.username,
            major: res.data.data.major,
            allowEmail: res.data.data.allow_email,
            isVerified: res.data.data.verify_on,
          };
          setUserData(ud);
          localStorage.setItem('userData', JSON.stringify(ud));
          localStorage.setItem('token', res.data.data.Authorization);
          setSnackBar({ type: 'success', msg: '이메일 인증이 필요합니다' });
        }
      })
      .then((res) => {
        setAuthLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setAuthLoading(false);

        // Timeout 에러핸들링
        if (err.code === 'ECONNABORTED') {
          setSnackBar({ type: 'error', msg: '다시 시도해주세요' });
        }
        // 이메일이나 패스워드 잘못 입력
        else if (err.response.status === 403) {
          setSnackBar({
            type: 'error',
            msg: '이메일이나 패스워드가 맞지 않습니다.',
          });
        } else {
          setSnackBar({
            type: 'error',
            msg: '로그인에 실패했습니다.',
          });
        }
      });
  };

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
    snackBar,
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
