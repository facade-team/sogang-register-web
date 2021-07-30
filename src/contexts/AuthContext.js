import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  const login = (user) => {
    setIsAuth(true);
    //setUserData(user);
    // 임시로 설정
    setUserData({
      ...user,
      name: '최현수',
      major: '컴퓨터공학',
    });
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
