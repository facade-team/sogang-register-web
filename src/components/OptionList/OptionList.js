import React, { useState } from 'react';
import { SectionContainer, ListContainer, ListBtn } from './OptionList.element';

const OptionList = () => {
  const [SemesterOption, setSemesterOption] = useState(false);
  const [MajorOption, setMajorOption] = useState(false);
  const [YearOption, setYearOption] = useState(false);
  const [TimeOption, setTimeOption] = useState(false);
  const [GradeOption, setGradeOption] = useState(false);
  const [SearchOption, setSearchOption] = useState(false);

  const List = (props) => {
    return (
      <ListContainer>
        <ListBtn
          focused={props.focused}
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            {
              props.name === '학년도/학기'
                ? setSemesterOption(!SemesterOption)
                : props.name === '전공/영역'
                ? setMajorOption(!MajorOption)
                : props.name === '시간'
                ? setTimeOption(!TimeOption)
                : props.name === '학년'
                ? setYearOption(!YearOption)
                : props.name === '학점'
                ? setGradeOption(!GradeOption)
                : setSearchOption(!SearchOption);
            }
          }}
        >
          {props.name}
        </ListBtn>
      </ListContainer>
    );
  };
  return (
    <SectionContainer>
      <List name="학년도/학기" focused={SemesterOption}></List>
      <List name="전공/영역" focused={MajorOption}></List>
      <List name="시간" focused={TimeOption}></List>
      <List name="학년" focused={YearOption}></List>
      <List name="학점" focused={GradeOption}></List>
      <List name="검색어" focused={SearchOption}></List>
    </SectionContainer>
  );
};

export default OptionList;
