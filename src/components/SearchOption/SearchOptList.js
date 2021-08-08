import React, { useState } from 'react';

import {
  SectionContainer,
  OptionContainer,
  OptBtn,
} from './SearchOptList.element';

import OptionModal from '../OptionModal/OptionModal';

// 임시 데이터
import { semesterData, majorData, gradeData, creditData } from './dummy';

const SearchOptList = () => {
  const [semesterOption, setSemesterOption] = useState({
    type: '학년도/학기',
    data: semesterData,
  });
  const [majorOption, setMajorOption] = useState({
    type: '전공/영역',
    data: majorData,
  });
  const [timeOption, setTimeOption] = useState({
    type: '시간',
  });
  const [gradeOption, setGradeOption] = useState({
    type: '학년',
    data: gradeData,
  });
  const [creditOption, setCreditOption] = useState({
    type: '학점',
    data: creditData,
  });
  const [searchOption, setSearchOption] = useState({
    type: '검색어',
  });

  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(false);
  const handleClickOpen = (option) => {
    setOption(option);
    setOpen(true);
  };

  return (
    <SectionContainer>
      <OptionContainer>
        <OptBtn onClick={() => handleClickOpen(semesterOption)}>
          학년도/학기
        </OptBtn>
        <OptBtn onClick={() => handleClickOpen(majorOption)}>전공/영역</OptBtn>
        <OptBtn onClick={() => handleClickOpen(timeOption)}>시간</OptBtn>
        <OptBtn onClick={() => handleClickOpen(gradeOption)}>학년</OptBtn>
        <OptBtn onClick={() => handleClickOpen(creditOption)}>학점</OptBtn>
        <OptBtn onClick={() => handleClickOpen(searchOption)}>검색어</OptBtn>
      </OptionContainer>
      <OptionModal open={open} setOpen={setOpen} option={option}></OptionModal>
    </SectionContainer>
  );
};

export default SearchOptList;
