import React, { useState } from 'react';
import {
  ListContainer,
  OptionContainer,
  SectionContainer,
  ListBtn,
  CheckboxContainer,
} from './SubList.element';
import { data } from '../../pages/DummyData';
import Checkbox from '../Checkbox/Checkbox';

const SubList = () => {
  const subOptionData = [
    {
      YearArray: ['1학년', '2학년', '3학년', '4학년'],
      TimeArray: [
        '1교시',
        '2교시',
        '3교시',
        '4교시',
        '5교시',
        '6교시',
        '7교시',
      ],
      LangArray: ['영어강의', '중국어강의'],
      ZoomArray: ['대면강의', '비대면강의'],
    },
  ];
  const [YearSubOption, setYearSubOption] = useState(false); //수강대상
  const [ProfSubOption, setProfSubOption] = useState(false); //교수
  const [TimeSubOption, setTimeSubOption] = useState(false); //수업교시
  const [LangSubOption, setLangSubOption] = useState(false); //강의언어
  const [ZoomSubOption, setZoomSubOption] = useState(false); //비대면

  // const YearSubControler = () => {
  //   YearSubOption === false
  //   ? (//세부옵션으로 수강대상 선택시
  //     setYearSubOption(true),
  //     setProfSubOption(false),
  //     setTimeSubOption(false),
  //     setLangSubOption(false),
  //     setZoomSubOption(false),//수강대상 버튼 활성화 & 나머지 비활성화

  // }

  const List = (props) => {
    return (
      <ListContainer>
        <ListBtn
          focused={props.focused}
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            {
              props.name === '수강대상'
                ? YearSubOption === false
                  ? setYearSubOption(true)
                  : setYearSubOption(false)
                : setYearSubOption(false);
              props.name === '교수'
                ? ProfSubOption === false
                  ? setProfSubOption(true)
                  : setProfSubOption(false)
                : setProfSubOption(false);
              props.name === '수업교시'
                ? TimeSubOption === false
                  ? setTimeSubOption(true)
                  : setTimeSubOption(false)
                : setTimeSubOption(false);
              props.name === '강의언어'
                ? LangSubOption === false
                  ? setLangSubOption(true)
                  : setLangSubOption(false)
                : setLangSubOption(false);
              props.name === '대면수업'
                ? ZoomSubOption === false
                  ? setZoomSubOption(true)
                  : setZoomSubOption(false)
                : setZoomSubOption(false);
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
        <List name="수강대상" focused={YearSubOption}></List>
        <List name="교수" focused={ProfSubOption}></List>
        <List name="수업교시" focused={TimeSubOption}></List>
        <List name="강의언어" focused={LangSubOption}></List>
        <List name="대면수업" focused={ZoomSubOption}></List>
      </OptionContainer>

      <CheckboxContainer>
        {YearSubOption === true ? (
          subOptionData.map((subject) => (
            <Checkbox subject={subject.YearArray} YearFocused={YearSubOption} />
          ))
        ) : ProfSubOption === true ? (
          data.map((subject) => (
            <Checkbox subject={subject.교수진} ProfFocused={ProfSubOption} />
          ))
        ) : TimeSubOption === true ? (
          subOptionData.map((subject) => (
            <Checkbox subject={subject.TimeArray} TimeFocused={TimeSubOption} />
          ))
        ) : LangSubOption === true ? (
          subOptionData.map((subject) => (
            <Checkbox subject={subject.LangArray} LangFocused={LangSubOption} />
          ))
        ) : ZoomSubOption === true ? (
          subOptionData.map((subject) => (
            <Checkbox subject={subject.ZoomArray} ZoomFocused={ZoomSubOption} />
          ))
        ) : (
          <h2>세부옵션을 선택해 주세요</h2>
        )}

        {/* {data.map((subject) =>
          YearSubOption === true ? (
            <Checkbox subject={subject.권장학년} YearFocused={YearSubOption} />
          ) : ProfSubOption === true ? (
            <Checkbox subject={subject.교수진} ProfFocused={ProfSubOption} />
          ) : TimeSubOption === true ? (
            <Checkbox
              subject={subject.수업시간_강의실}
              TimeFocused={TimeSubOption}
            />
          ) : LangSubOption === true ? (
            <Checkbox LangFocused={LangSubOption} />
          ) : (
            <Checkbox />
          )
        )} */}
      </CheckboxContainer>
    </SectionContainer>
  );
};

export default SubList;
