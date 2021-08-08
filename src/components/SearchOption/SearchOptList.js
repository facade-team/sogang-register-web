import React, { useState } from 'react';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

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

  const [open, setOpen] = useState(false);
  const [option, setOption] = useState([]);
  const { setSnackBar } = useSnackBarContext();

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
    set({ ...opt, selected: '' });
  };

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
        <OptBtn
          onClick={() => handleClickOpen(timeOption, setTimeOption)}
          selected={timeOption.selected}
          bgColor="#22a6b3"
        >
          시간
        </OptBtn>
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
