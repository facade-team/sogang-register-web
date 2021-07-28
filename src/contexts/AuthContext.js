import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const login = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    console.log('wow login!');
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const logout = () => {
    setIsLoggedIn(false);
    setUserData({});
    console.log('logout');
  };
  const authContextValue = {
    isLoggedIn,
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
