import { createContext, useState, useContext } from 'react';

const SubjectContext = createContext({});

const SubjectProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [departments, setDepartments] = useState([]);

  const subjectContextValue = {
    subjects,
    setSubjects,
    departments,
    setDepartments,
  };

  return (
    <SubjectContext.Provider value={subjectContextValue}>
      {children}
    </SubjectContext.Provider>
  );
};

const useSubjectContext = () => useContext(SubjectContext);

export { SubjectProvider, useSubjectContext };
