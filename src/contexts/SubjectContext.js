import { createContext, useState, useContext } from 'react';

const SubjectContext = createContext({});

const SubjectProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [departments, setDepartments] = useState([]);

  // 01.검색옵션 이 설정돼있는지 여부 ( 학년도/학기를 선택할 때 설정)
  const [isSearchOption, setIsSearchOption] = useState(false);

  const [profOption, setProfOption] = useState(false);
  const [langOption, setLangOption] = useState(false);
  const [contactOption, setContactOption] = useState(false);

  // 중복제거,정렬된 교수 리스트
  const [profArr, setProfArr] = useState([]);

  const subjectContextValue = {
    subjects,
    setSubjects,
    departments,
    setDepartments,
    isSearchOption,
    setIsSearchOption,
    profOption,
    setProfOption,
    langOption,
    setLangOption,
    contactOption,
    setContactOption,
    profArr,
    setProfArr,
  };

  return (
    <SubjectContext.Provider value={subjectContextValue}>
      {children}
    </SubjectContext.Provider>
  );
};

const useSubjectContext = () => useContext(SubjectContext);

export { SubjectProvider, useSubjectContext };
