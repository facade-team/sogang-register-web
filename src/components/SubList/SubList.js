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
  const [YearSubOption, setYearSubOption] = useState(false); //수강대상
  const [ProfSubOption, setProfSubOption] = useState(false); //교수
  const [TimeSubOption, setTimeSubOption] = useState(false); //수업교시
  const [LangSubOption, setLangSubOption] = useState(false); //강의언어
  const [ZoomSubOption, setZoomSubOption] = useState(false); //비대면
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
                  : // console.log(data.map((subject) => subject.교수진))
                    setZoomSubOption(false)
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
        {data.map((subject) =>
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
        )}
        {/* //     <Checkbox
          //     subject={subject}
          //     YearFocused={YearSubOption}
          //     ProfFocused={ProfSubOption}
          //     TimeFocused={TimeSubOption}
          //     LangFocused={LangSubOption}
          //     ZoomFocused={ZoomSubOption}
          //   ></Checkbox> */}
      </CheckboxContainer>
    </SectionContainer>
  );
};

export default SubList;
