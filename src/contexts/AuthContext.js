import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useSnackBarContext } from './SnackBarContext';
import { useLatestSubjectsContext } from './LatestSubjectsContext';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  // const [snackBar, setSnackBar] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const { setSnackBar } = useSnackBarContext();
  const { setLatestSubjects } = useLatestSubjectsContext();

  // user : 사용자가 입력한 id, password 객체
  const login = (user) => {
    return new Promise((resolve, reject) => {
      setAuthLoading(true);
      axios
        .post('/auth/login', user)
        .then((res) => {
          if (res.status === 201) {
            setIsAuth(true);

            let ud;
            if (res.data.favorites) {
              ud = {
                email: res.data.data.email,
                username: res.data.data.username,
                major: res.data.data.major,
                allowEmail: res.data.data.allow_email,
                isVerified: res.data.data.verify_on,
                token: res.data.data.Authorization,
                subjects: res.data.favorites,
              };
            } else {
              ud = {
                email: res.data.data.email,
                username: res.data.data.username,
                major: res.data.data.major,
                allowEmail: res.data.data.allow_email,
                isVerified: res.data.data.verify_on,
                token: res.data.data.Authorization,
              };
            }

            axios.defaults.headers.common['Authorization'] =
              res.data.data.Authorization;
            console.log('authcontext', res.data.data.Authorization);

            setUserData(ud);

            localStorage.setItem('userData', JSON.stringify(ud));
            localStorage.setItem('token', res.data.data.Authorization);
          }
          // 이메일 인증은 안됐지만 로그인 성공
          else if (res.status === 202) {
            setSnackBar({
              type: 'success',
              msg: '이메일 인증이 필요한 계정입니다',
            });
            setIsAuth(true);
            const ud = {
              email: res.data.data.email,
              username: res.data.data.username,
              major: res.data.data.major,
              allowEmail: res.data.data.allow_email,
              isVerified: res.data.data.verify_on,
              token: res.data.data.Authorization,
            };
            setUserData(ud);
            localStorage.setItem('userData', JSON.stringify(ud));
            localStorage.setItem('token', res.data.data.Authorization);
          }
          setAuthLoading(false);
          return resolve(true);
        })
        .catch((err) => {
          setAuthLoading(false);

          // timeout 에러핸들링
          if (err.code === 'ECONNABORTED') {
            setSnackBar({ type: 'error', msg: '서버 접속에 실패하였습니다.' });
          }
          // 이메일이나 패스워드 잘못 입력
          // else if (err.response && err.response.status === 403) {
          //   setSnackBar({
          //     type: 'error',
          //     msg: '이메일이나 패스워드가 맞지 않습니다.',
          //   });
          // }
          else {
            setSnackBar({
              type: 'error',
              msg: '로그인에 실패했습니다.',
            });
          }
          return reject(err);
        });
    });
  };

  const logout = () => {
    setIsAuth(false);
    setUserData({});
    setLatestSubjects([]);
    localStorage.clear();
  };
  const authContextValue = {
    isAuth,
    login,
    logout,
    userData,
    // snackBar,
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
