import { createContext, useState, useContext } from 'react';

const LatestSubjectsContext = createContext({});

const LatestSubjectsProvider = ({ children }) => {
  const [latestSubjects, setLatestSubjects] = useState([]);

  const latestSubjectsContextValue = {
    latestSubjects,
    setLatestSubjects,
  };

  return (
    <LatestSubjectsContext.Provider value={latestSubjectsContextValue}>
      {children}
    </LatestSubjectsContext.Provider>
  );
};

const useLatestSubjectsContext = () => useContext(LatestSubjectsContext);

export { LatestSubjectsProvider, useLatestSubjectsContext };
