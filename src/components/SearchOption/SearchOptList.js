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
import { semesterData, majorData, gradeData, creditData } from './dummy';

const SearchOptList = () => {
  const [semesterOption, setSemesterOption] = useState({
    type: '학년도/학기',
    data: semesterData,
    selected: '',
  });
  const [majorOption, setMajorOption] = useState({
    type: '전공/영역',
    data: majorData,
    selected: '',
    code: '',
  });
  const [timeOption, setTimeOption] = useState({
    type: '시간',
    data: ['test'],
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
  const [searchOption, setSearchOption] = useState({
    type: '검색어',
    data: ['test'],
    selected: '',
  });

  // api 요청보내는 option 값을 저장하기 위한 state
  const [saveOption, setSaveOption] = useState({
    year: '',
    semester: '',
    department: '',
    credit: [],
    grade: [],
    searchby: '',
    keyword: '',
  });

  const [open, setOpen] = useState(false);

  // option : OptionModal 컴포넌트에 클릭한 option 과 set함수를 배열로 넘겨주기 위한 state
  const [option, setOption] = useState([]);
  const { setSnackBar } = useSnackBarContext();
  const { setLoading } = useLoadingContext();

  // api 요청으로 받아온 과목,학부 리스트를 전역 state 로 set
  const { setSubjects, setDepartments } = useSubjectContext();

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
    if (opt === semesterOption) {
      setSemesterOption({ ...semesterOption, selected: '' });
      setMajorOption({ ...majorOption, selected: '' });
      setTimeOption({ ...timeOption, selected: '' });
      setGradeOption({ ...gradeOption, selected: '' });
      setCreditOption({ ...creditOption, selected: '' });
      setSearchOption({ ...searchOption, selected: '' });
    }
    // 일반적인 경우에서 태그 삭제 (set 조건문은 검색옵션 전부 초기화를 위해서 억지로 만든거임. 큰 의미 x)
    if (set) set({ ...opt, selected: '' });

    if (opt === majorOption) {
    }
  };

  const findSubjectByOption = (opt) => {
    if (semesterOption.selected) {
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
              console.log(res.data.data);
              setLoading(false);
              setSubjects(res.data.data);
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
              setSnackBar({
                type: 'error',
                msg: '오류가 발생했습니다. 다시 시도해주세요.',
              });
              // 검색옵션 초기화
              handleTagRemove(semesterOption, null);
            });
        })
        .catch((err) => {
          console.log(err);
          setSnackBar({
            type: 'error',
            msg: '오류가 발생했습니다. 다시 시도해주세요.',
          });
        });
    } else setSubjects([]);
  };

  useEffect(() => {
    if (semesterOption.selected) {
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
      console.log('학년도/학기 골랐을 때', cleanSaveOption);

      findSubjectByOption(cleanSaveOption);
      setSaveOption(cleanSaveOption);
    } else {
      // semesterOption 선택을 삭제하면 과목카드 전부 제거
      setSubjects([]);
    }
  }, [semesterOption.selected]);

  /*************전공/영역 검색옵션 선택 시 ******************/
  useEffect(() => {
    // console.log('전공/영역 선택한거', majorOption.selected, majorOption.code);
    if (majorOption.selected) {
      const cleanSaveOption = removeFalseMember({
        ...saveOption,
        department: majorOption.code,
      });
      console.log('전공/영역 골랐을때', cleanSaveOption);
      findSubjectByOption(cleanSaveOption);
      setSaveOption(cleanSaveOption);
    }
    // 전공/영역 검색옵션 태그 제거했을때
    else {
      const cleanSaveOption = removeFalseMember({
        ...saveOption,
        department: '',
      });
      console.log('전공/영역 태그 제거 시', cleanSaveOption);
      findSubjectByOption(cleanSaveOption);
      setSaveOption(cleanSaveOption);
    }
  }, [majorOption.selected]);

  /*************학년 검색옵션 선택 시 ******************/
  // FIXME: 학년검색은 api 요청안하고 state 에 담아서 하는게 훨씬 빠르지만, 일단은 api 요청으로 구현
  useEffect(() => {
    if (gradeOption.selected) {
      const cleanSaveOption = removeFalseMember({
        ...saveOption,
        // TODO: 학년 다중선택가능하게끔 해야함
        grade: [Number(gradeOption.selected[0])],
      });
      console.log('학년 골랐을때', cleanSaveOption);
      findSubjectByOption(cleanSaveOption);
      setSaveOption(cleanSaveOption);
    }
    // 학년 검색옵션 태그 제거했을때
    else {
      const cleanSaveOption = removeFalseMember({
        ...saveOption,
        grade: [],
      });
      console.log('학년 태그 제거 시', cleanSaveOption);
      findSubjectByOption(cleanSaveOption);
      setSaveOption(cleanSaveOption);
    }
  }, [gradeOption.selected]);

  /*************학점 검색옵션 선택 시 ******************/
  // FIXME: 학점검색도 api 요청안하고 state 에 담아서 하는게 훨씬 빠르지만, 일단은 api 요청으로 구현
  useEffect(() => {
    if (creditOption.selected) {
      const cleanSaveOption = removeFalseMember({
        ...saveOption,
        // TODO: 학점도 다중선택가능하게끔 해야함
        credit: [Number(creditOption.selected[0])],
      });
      console.log('학점 골랐을때', cleanSaveOption);
      findSubjectByOption(cleanSaveOption);
      setSaveOption(cleanSaveOption);
    }
    // 학년 검색옵션 태그 제거했을때
    else {
      const cleanSaveOption = removeFalseMember({
        ...saveOption,
        credit: [],
      });
      console.log('학점 태그 제거 시', cleanSaveOption);
      findSubjectByOption(cleanSaveOption);
      setSaveOption(cleanSaveOption);
    }
  }, [creditOption.selected]);

  return (
    <SectionContainer>
      <OptionContainer>
        <OptBtn
          onClick={() => {
            handleClickOpen(semesterOption, setSemesterOption);
          }}
          selected={semesterOption.selected}
          bgColor="#f0932b"
        >
          학년도/학기
        </OptBtn>
        <OptBtn
          onClick={() => handleClickOpen(majorOption, setMajorOption)}
          selected={majorOption.selected}
          bgColor="#ff7979"
        >
          전공/영역
        </OptBtn>
        {/* <OptBtn
          onClick={() => handleClickOpen(timeOption, setTimeOption)}
          selected={timeOption.selected}
          bgColor="#22a6b3"
        >
          시간
        </OptBtn> */}
        <OptBtn
          onClick={() => handleClickOpen(gradeOption, setGradeOption)}
          selected={gradeOption.selected}
          bgColor="#badc58"
        >
          학년
        </OptBtn>
        <OptBtn
          onClick={() => handleClickOpen(creditOption, setCreditOption)}
          selected={creditOption.selected}
          bgColor="#95afc0"
        >
          학점
        </OptBtn>
        <OptBtn
          onClick={() => handleClickOpen(searchOption, setSearchOption)}
          selected={searchOption.selected}
          bgColor="#2e86de"
        >
          검색어
        </OptBtn>
      </OptionContainer>
      <TagContainer2>
        {semesterOption.selected ? (
          <Tag2
            fontSize="13"
            bgColor="#f0932b"
            onClick={() => handleTagRemove(semesterOption, setSemesterOption)}
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
          >
            {majorOption.selected}
            <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
          </Tag2>
        ) : null}
        {timeOption.selected ? (
          <Tag2
            fontSize="13"
            bgColor="#22a6b3"
            onClick={() => handleTagRemove(timeOption, setTimeOption)}
          >
            {timeOption.selected}
            <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
          </Tag2>
        ) : null}
        {gradeOption.selected ? (
          <Tag2
            fontSize="13"
            bgColor="#badc58"
            onClick={() => handleTagRemove(gradeOption, setGradeOption)}
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
          >
            {creditOption.selected}
            <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
          </Tag2>
        ) : null}
        {searchOption.selected ? (
          <Tag2
            fontSize="13"
            bgColor="#2e86de"
            onClick={() => handleTagRemove(searchOption, setSearchOption)}
          >
            {searchOption.selected}
            <IoIosClose size="16" style={{ marginLeft: '3px' }}></IoIosClose>
          </Tag2>
        ) : null}
      </TagContainer2>

      <OptionModal open={open} setOpen={setOpen} option={option}></OptionModal>
    </SectionContainer>
  );
};

export default SearchOptList;
