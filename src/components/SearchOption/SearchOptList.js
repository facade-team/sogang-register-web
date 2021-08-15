import React, { useState, useEffect } from 'react';
import { useSnackBarContext } from '../../contexts/SnackBarContext';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useSubjectContext } from '../../contexts/SubjectContext';
import axios from 'axios';

import {
  SectionContainer,
  OptionContainer,
  OptBtn,
  TagContainer2,
  Tag2,
} from './SearchOptList.element';

import { IoIosClose } from 'react-icons/io';

import OptionModal from '../OptionModal/OptionModal';

// 임시 데이터
import { semesterData, gradeData, creditData, dayData } from './dummy';
import { majorCode_2021_2 } from '../../utils/majorCode';

const SearchOptList = () => {
  const [semesterOption, setSemesterOption] = useState({
    type: '학년도/학기',
    data: semesterData,
    selected: '',
  });
  const [majorOption, setMajorOption] = useState({
    type: '전공/영역',
    data: majorCode_2021_2, // 정적으로 설정
    selected: '',
    code: '',
  });
  const [dayOption, setDayOption] = useState({
    type: '요일',
    data: dayData,
    selected: '',
  });
  const [gradeOption, setGradeOption] = useState({
    type: '학년',
    data: gradeData,
    selected: '',
  });
  const [creditOption, setCreditOption] = useState({
    type: '학점',
    data: creditData,
    selected: '',
  });
  const [searchKeywordOption, setSearchKeywordOption] = useState({
    type: '검색어',
    data: ['test'],
    searchBy: '', // 검색 타입
    selected: '', // 검색 키워드
  });

  // api 요청보내는 option 값을 저장하기 위한 state
  const [saveOption, setSaveOption] = useState({
    year: '', // ex. '20','21' ..
    semester: '', // ex. '1','w' ..
    department: '',
    day: [],
    credit: [],
    grade: [],
    searchby: '',
    keyword: '',
  });

  const [open, setOpen] = useState(false);

  // option : OptionModal 컴포넌트에 클릭한 option 과 set함수를 배열로 넘겨주기 위한 state
  const [option, setOption] = useState([]);

  const { setSnackBar } = useSnackBarContext();
  const { loading, setLoading } = useLoadingContext();

  // api 요청으로 받아온 과목,학부 리스트를 전역 state 로 set
  const {
    setSubjects,
    setDepartments,
    setProfOption,
    setLangOption,
    setContactOption,
    setIsSearchOption,
    isSearchOption,
  } = useSubjectContext();

  // saveOption 에서 비어있는(false) 멤버를 없애기 위한 유틸함수
  const removeFalseMember = (obj) => {
    const temp = { ...obj };
    for (const key in temp) {
      // === 로 하면 안됨!
      if (temp[key] == false) {
        delete temp[key];
      }
    }
    return temp;
  };

  const handleClickOpen = (optionParam, optionControlParam) => {
    if (optionParam !== semesterOption && !semesterOption.selected) {
      return setSnackBar({
        type: 'error',
        msg: '학년도/학기 옵션을 먼저 선택해야합니다.',
      });
    }
    const newOption = [optionParam, optionControlParam];
    setOption(newOption);
    setOpen(true);
  };

  const handleTagRemove = (opt, set) => {
    if (!loading) {
      if (opt === semesterOption) {
        setSemesterOption({ ...semesterOption, selected: '' });
        setMajorOption({ ...majorOption, selected: '' });
        setDayOption({ ...dayOption, selected: '' });
        setGradeOption({ ...gradeOption, selected: '' });
        setCreditOption({ ...creditOption, selected: '' });
        setSearchKeywordOption({ ...searchKeywordOption, selected: '' });
        setIsSearchOption(false);
        setProfOption(false);
        setLangOption(false);
        setContactOption(false);
      } else {
        // 학년도/학기가 아닌 다른 태그 삭제했을 때
        set({ ...opt, selected: '' });
      }
    }
  };

  // FIXME : 계절학기 선택 시에는 전공/영역 api 불러올 필요 없음
  const findSubjectByOption = (opt) => {
    // 검색옵션 다시 설정할때는 정렬옵션 초기화시킴
    setProfOption(false);
    // TODO: opt 의 프로퍼티가 2개일때가 최초 학년도/학기만 선택할 경우임. Object.keys(opt).length === 2
    if (semesterOption.selected && Object.keys(opt).length === 2) {
      // 21학년도 2학기 에는 전공/영역 을 불러오는 api 를 호출하지 않기 위한 꼼수
      if (opt.year !== '21' && opt.semester !== '2') {
        // 버튼누르고 요청하는 동안 다른버튼 비활성화
        setLoading(true);
        // 1. 학년도 학기를 바탕으로 해당 학기의 전공/영역 불러오기
        axios
          .get('/subject/department', {
            params: { year: opt.year, semester: opt.semester },
          })
          .then((res) => {
            setDepartments(res.data.data);
            setMajorOption({ ...majorOption, data: res.data.data });
            // 2. 과목검색 시, option 을 넣어서 api 요청
            axios
              .post('subject/option', opt)
              .then((res) => {
                setLoading(false);
                setSubjects(res.data.data);
              })
              .catch((err) => {
                setLoading(false);
                setSnackBar({
                  type: 'error',
                  msg: '서버 오류가 발생했습니다. 다시 시도해주세요.',
                });
                // 검색옵션 초기화
                setSemesterOption({ ...semesterOption, selected: '' });
              });
          })
          .catch((err) => {
            setSnackBar({
              type: 'error',
              msg: '오류가 발생했습니다. 다시 시도해주세요.',
            });
            setLoading(false);
            // 학년도/학기 선택에서 에러뜰시 검색옵션 전부 초기화
            setSemesterOption({ ...semesterOption, selected: '' });
          });
      }
    }
    // 다른 검색옵션으로 조회할때( 위의 if 문에서 걸러진 후)
    // opt 객체의 프로퍼티가 있다는 것은 검색옵션을 선택했다는 의미
    if (Object.keys(opt).length) {
      // 버튼누르고 요청하는 동안 다른버튼 비활성화
      setLoading(true);
      axios
        .post('subject/option', opt)
        .then((res) => {
          setLoading(false);
          setSubjects(res.data.data);
        })
        .catch((err) => {
          setLoading(false);
          setSnackBar({
            type: 'error',
            msg: '서버 오류가 발생했습니다. 다시 시도해주세요.',
          });
          // 검색옵션 초기화
          setSemesterOption({ ...semesterOption, selected: '' });
        });
    }
  };

  // FIXME: 초기 모든 과목 담을 state 있어야함
  // FIXME: state 로 검색 시에 결함있음 (학년을 계속해서 고르게되면 결과값들이 걸러짐)
  // const findSubjectByState = (opt) => {
  //   setLoading(true);
  //   console.log('subjects', subjects);
  //   console.log('opt', opt);
  //   //TODO: 학년 중복 선택 가능하게끔
  //   if (opt.grade[0]) {
  //     const checkSubjectGrade = (subject) => {
  //       if (
  //         subject.수강대상 === '전학년' ||
  //         subject.수강대상.indexOf(String(opt.grade[0])) !== -1
  //       )
  //         return true;
  //       else return false;
  //     };
  //     const result = subjects.filter(checkSubjectGrade);
  //     console.log(result);
  //     setSubjects(result);
  //   }
  //   setLoading(false);
  // };

  /***** 학년도/학기 옵션 선택 시 ****/
  useEffect(() => {
    if (semesterOption.selected) {
      // 학년도/학기를 선택했다는 건, 검색옵션이 선택되었다는 뜻
      setIsSearchOption(true);
      const [fullYear, fullSemester] = semesterOption.selected.split('-'); // ex) [2021,2학기]
      const year = fullYear.substring(2, 4);
      let semester;
      switch (fullSemester) {
        case '1학기':
          semester = '1';
          break;
        case '2학기':
          semester = '2';
          break;
        case '여름학기':
          semester = 's';
          break;
        case '겨울학기':
          semester = 'w';
          break;
        default:
          break;
      }
      const cleanSaveOption = removeFalseMember({
        ...saveOption,
        year: year,
        semester: semester,
      });

      setSaveOption(cleanSaveOption);
      findSubjectByOption(cleanSaveOption);
    } else {
      // semesterOption 선택을 삭제하면 과목카드 전부 제거
      setSaveOption([]);
      setIsSearchOption(false);
      setSubjects([]);
    }
  }, [semesterOption.selected]);

  /*************전공/영역 검색옵션 선택 시 ******************/
  useEffect(() => {
    // 검색옵션(학년도학기) 가 설정돼있을때만 실행
    if (isSearchOption) {
      if (majorOption.selected) {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          department: majorOption.code,
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
      // 전공/영역 검색옵션 태그 제거했을때
      else {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          department: '',
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
    }
  }, [majorOption.selected]);

  /*************학년 검색옵션 선택 시 ******************/
  // FIXME: 학년검색은 api 요청안하고 state 에 담아서 하는게 훨씬 빠르지만, 일단은 api 요청으로 구현
  useEffect(() => {
    if (isSearchOption) {
      if (gradeOption.selected) {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          // TODO: 학년 다중선택가능하게끔 해야함
          grade: [Number(gradeOption.selected[0])],
        });
        // findSubjectByState(cleanSaveOption); // 결함있어서 일단 사용x
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
      // 학년 검색옵션 태그 제거했을때
      else {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          grade: [],
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
    }
  }, [gradeOption.selected]);

  /*************학점 검색옵션 선택 시 ******************/
  // FIXME: 학점검색도 api 요청안하고 state 에 담아서 하는게 훨씬 빠르지만, 일단은 api 요청으로 구현
  useEffect(() => {
    if (isSearchOption) {
      if (creditOption.selected) {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          // TODO: 학점도 다중선택가능하게끔 해야함
          credit: [Number(creditOption.selected[0])],
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
      // 학년 검색옵션 태그 제거했을때
      else {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          credit: [],
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
    }
  }, [creditOption.selected]);

  /*************요일 검색옵션 선택 시 ******************/
  useEffect(() => {
    if (isSearchOption) {
      if (dayOption.selected) {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          // TODO: 학점도 다중선택가능하게끔 해야함
          day: [dayOption.selected],
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
      // 학년 검색옵션 태그 제거했을때
      else {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          day: [],
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
    }
  }, [dayOption.selected]);

  /*************검색어 검색옵션 선택 시 ******************/
  useEffect(() => {
    if (isSearchOption) {
      if (searchKeywordOption.selected) {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          searchby: searchKeywordOption.searchBy,
          keyword: searchKeywordOption.selected,
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
      // 검색어 옵션 태그 제거했을때
      else {
        const cleanSaveOption = removeFalseMember({
          ...saveOption,
          searchby: '',
          keyword: '',
        });
        findSubjectByOption(cleanSaveOption);
        setSaveOption(cleanSaveOption);
      }
    }
  }, [searchKeywordOption.selected]);

  return (
    <SectionContainer>
      <OptionContainer>
        <OptBtn
          onClick={() => {
            handleClickOpen(semesterOption, setSemesterOption);
            setIsSearchOption(true);
          }}
          selected={semesterOption.selected}
          bgColor="#f0932b"
          disabled={loading}
        >
          학년도/학기
        </OptBtn>
        {saveOption.semester !== 's' && saveOption.semester !== 'w' ? (
          <OptBtn
            onClick={() => handleClickOpen(majorOption, setMajorOption)}
            selected={majorOption.selected}
            bgColor="#ff7979"
            disabled={loading}
          >
            전공/영역
          </OptBtn>
        ) : null}

        <OptBtn
          onClick={() => handleClickOpen(gradeOption, setGradeOption)}
          selected={gradeOption.selected}
          bgColor="#badc58"
          disabled={loading}
        >
          학년
        </OptBtn>
        <OptBtn
          onClick={() => handleClickOpen(creditOption, setCreditOption)}
          selected={creditOption.selected}
          bgColor="#95afc0"
          disabled={loading}
        >
          학점
        </OptBtn>
        <OptBtn
          onClick={() => handleClickOpen(dayOption, setDayOption)}
          selected={dayOption.selected}
          bgColor="#22a6b3"
          disabled={loading}
        >
          요일
        </OptBtn>
        <OptBtn
          onClick={() =>
            handleClickOpen(searchKeywordOption, setSearchKeywordOption)
          }
          selected={searchKeywordOption.selected}
          bgColor="#2e86de"
          disabled={loading}
        >
          검색어
        </OptBtn>
      </OptionContainer>
      {semesterOption.selected ? (
        <TagContainer2>
          {semesterOption.selected ? (
            <Tag2
              fontSize="13"
              bgColor="#f0932b"
              onClick={() => handleTagRemove(semesterOption, setSemesterOption)}
              disabled={loading}
            >
              {semesterOption.selected}
              <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
            </Tag2>
          ) : null}
          {majorOption.selected ? (
            <Tag2
              fontSize="13"
              bgColor="#ff7979"
              onClick={() => handleTagRemove(majorOption, setMajorOption)}
              disabled={loading}
            >
              {majorOption.selected}
              <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
            </Tag2>
          ) : null}
          {dayOption.selected ? (
            <Tag2
              fontSize="13"
              bgColor="#22a6b3"
              onClick={() => handleTagRemove(dayOption, setDayOption)}
              disabled={loading}
            >
              {dayOption.selected}요일
              <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
            </Tag2>
          ) : null}
          {gradeOption.selected ? (
            <Tag2
              fontSize="13"
              bgColor="#badc58"
              onClick={() => handleTagRemove(gradeOption, setGradeOption)}
              disabled={loading}
            >
              {gradeOption.selected}
              <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
            </Tag2>
          ) : null}
          {creditOption.selected ? (
            <Tag2
              fontSize="13"
              bgColor="#95afc0"
              onClick={() => handleTagRemove(creditOption, setCreditOption)}
              disabled={loading}
            >
              {creditOption.selected}
              <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
            </Tag2>
          ) : null}
          {searchKeywordOption.selected ? (
            <Tag2
              fontSize="13"
              bgColor="#2e86de"
              onClick={() =>
                handleTagRemove(searchKeywordOption, setSearchKeywordOption)
              }
              disabled={loading}
            >
              {searchKeywordOption.searchBy} : {searchKeywordOption.selected}
              <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
            </Tag2>
          ) : null}
        </TagContainer2>
      ) : null}

      <OptionModal open={open} setOpen={setOpen} option={option}></OptionModal>
    </SectionContainer>
  );
};

export default SearchOptList;
