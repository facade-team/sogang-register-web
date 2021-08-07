import { createContext, useState, useContext } from 'react';

const SnackBarContext = createContext({});

const SnackBarProvider = ({ children }) => {
  const [snackBar, setSnackBar] = useState(false);

  const snackBarContextValue = {
    snackBar,
    setSnackBar,
  };

  return (
    <SnackBarContext.Provider value={snackBarContextValue}>
      {children}
    </SnackBarContext.Provider>
  );
};

const useSnackBarContext = () => useContext(SnackBarContext);

export { SnackBarProvider, useSnackBarContext };
