import { createContext, useState, useContext } from 'react';

const APILoadingContext = createContext({});

const APILoadingProvider = ({ children }) => {
  const [APILoading, setAPILoading] = useState('');

  const APILoadingContextValue = {
    APILoading,
    setAPILoading,
  };

  return (
    <APILoadingContext.Provider value={APILoadingContextValue}>
      {children}
    </APILoadingContext.Provider>
  );
};

const useAPILoadingContext = () => useContext(APILoadingContext);

export { APILoadingProvider, useAPILoadingContext };
