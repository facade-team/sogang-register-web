import { createContext, useState, useContext } from 'react';

const SubjectContext = createContext({});

const SubjectProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [departments, setDepartments] = useState([]);

  // 01.검색옵션 이 설정돼있는지 여부 ( 학년도/학기를 선택할 때 설정)
  const [isSearchOption, setIsSearchOption] = useState(false);

  // 교수정렬옵션에 의해 정렬된 과목
  const [subjectsByProf, setSubjectsByProf] = useState([]);

  const [profOption, setProfOption] = useState(false);
  const [langOption, setLangOption] = useState(false);
  const [contactOption, setContactOption] = useState(false);

  const subjectContextValue = {
    subjects,
    setSubjects,
    departments,
    setDepartments,
    isSearchOption,
    setIsSearchOption,
    subjectsByProf,
    setSubjectsByProf,
    profOption,
    setProfOption,
    langOption,
    setLangOption,
    contactOption,
    setContactOption,
  };

  return (
    <SubjectContext.Provider value={subjectContextValue}>
      {children}
    </SubjectContext.Provider>
  );
};

const useSubjectContext = () => useContext(SubjectContext);

export { SubjectProvider, useSubjectContext };
