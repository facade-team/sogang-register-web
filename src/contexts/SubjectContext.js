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

  // 대면 / 비대면
  const [ontact, setOntact] = useState(true);
  const [untact, setUntact] = useState(true);

  // 강의언어 옵션리스트
  const [kor, setKor] = useState(true);
  const [eng, setEng] = useState(true);
  const [china, setChina] = useState(true);

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
    ontact,
    setOntact,
    untact,
    setUntact,
    kor,
    setKor,
    eng,
    setEng,
    china,
    setChina,
  };

  return (
    <SubjectContext.Provider value={subjectContextValue}>
      {children}
    </SubjectContext.Provider>
  );
};

const useSubjectContext = () => useContext(SubjectContext);

export { SubjectProvider, useSubjectContext };
