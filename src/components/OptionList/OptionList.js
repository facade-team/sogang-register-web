import React, { useState } from 'react';
import {
  SectionContainer,
  ListContainer,
  ListBtn,
  SearchContainer,
  OptionContainer,
} from './OptionList.element';
import Select from 'react-select';

const Major = [
  { value: '전인교육원(전체)', label: '전인교육원(전체)' },
  { value: '전인교육원(공통필수)', label: '전인교육원(공통필수)' },
  { value: '전인교육원(공통선택)', label: '전인교육원(공통선택)' },
  { value: '전인교육원(자유선택)', label: '전인교육원(자유선택)' },
  { value: '전인교육원(전공입문)', label: '전인교육원(전공입문)' },

  // '국어국문학',
  // '사학',
  // '철학',
  // '종교학',
  // '영미어문',
  // '미국문화',
  // '유럽문화',
  // '독일문화',
  // '프랑스문화',
  // '중국문화',
  // '일본문화',
  // '사회학',
  // '정치외교학',
  // '심리학',
  // '법학',
  // '경제학',
  // '경영학',
  // '커뮤니케이션학',
  // '지식융합미디어학부',
  // '글로벌한국학',
  // '신문방송학',
  // '아트&테크놀로지',
  // '미디어&엔터테인먼트',
  // '수학',
  // '물리학',
  // '화학',
  // '생명과학',
  // '전자공학',
  // '컴퓨터공학',
  // '화공생명공학',
  // '기계공학',
  // '바이오융합기술',
  // '교육문화',
  // '여성학',
  // '정치학.경제학.철학',
  // '공공인재',
  // '스포츠미디어',
  // '군이러닝',
  // '동아시아학연계전공',
  // '빅데이터 사이언스(데이터분석)',
  // '빅데이터 사이언스(데이터엔지니어)',
  // '스타트업',
  // '융합소프트웨어',
  // '융합소프트웨어(인문콘텐츠융합)',
  // '인공지능',
  // '한국발전과국제개발협력',
  // '한국사회문화',
  // '교환',
  // '타대학',
  // '특별수강',
];
const Year = [
  { value: '1학년', label: '1학년' },
  { value: '2학년', label: '2학년' },
  { value: '3학년', label: '3학년' },
  { value: '4학년', label: '4학년' },
];

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
      <OptionContainer>
        <List name="학년도/학기" focused={SemesterOption}></List>
        <List name="전공/영역" focused={MajorOption}></List>
        <List name="시간" focused={TimeOption}></List>
        <List name="학년" focused={YearOption}></List>
        <List name="학점" focused={GradeOption}></List>
        <List name="검색어" focused={SearchOption}></List>
      </OptionContainer>

      <SearchContainer>
        {SemesterOption === true ? (
          <div
            style={{ width: '250px', marginRight: '10px', marginBottom: '5px' }}
          >
            <Select placeholder="학년도/학기" />
          </div>
        ) : (
          <></>
        )}
        {MajorOption === true ? (
          <div
            style={{ width: '250px', marginRight: '10px', marginBottom: '5px' }}
          >
            <Select placeholder={'전공/영역'} options={Major} width="250px" />
          </div>
        ) : (
          <></>
        )}
        {TimeOption === true ? (
          <div
            style={{ width: '250px', marginRight: '10px', marginBottom: '5px' }}
          >
            <Select placeholder={'시간'} />
          </div>
        ) : (
          <></>
        )}
        {YearOption === true ? (
          <div
            style={{ width: '250px', marginRight: '10px', marginBottom: '5px' }}
          >
            <Select placeholder={'학년'} options={Year} />
          </div>
        ) : (
          <></>
        )}
        {GradeOption === true ? (
          <div
            style={{ width: '250px', marginRight: '10px', marginBottom: '5px' }}
          >
            <Select placeholder={'학점'} />
          </div>
        ) : (
          <></>
        )}
        {SearchOption === true ? (
          <div
            style={{ width: '250px', marginRight: '10px', marginBottom: '5px' }}
          >
            <Select placeholder={'검색어'} />
          </div>
        ) : (
          <></>
        )}
      </SearchContainer>
    </SectionContainer>
  );
};

export default OptionList;
