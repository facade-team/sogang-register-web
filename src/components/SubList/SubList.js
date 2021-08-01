import React, { useState } from 'react';
import {
  ListContainer,
  OptionContainer,
  SectionContainer,
  ListBtn,
  CheckboxContainer,
} from './SubList.element';
import { ScrollArea, FoldBtn, ScrollBarArea } from '../ScrollData/ScrollData.element';
import { CheckContainer, ChkLabel, SubContainer } from '../Checkbox/Checkbox.element';


export const subOptionData = [
    {
      YearArray: ['1학년', '2학년', '3학년', '4학년'],
      ProfArray: ['채서영', 'Barrie Michael Jonathan Mathew', '신경원', '황은주', 'Disney, Daniel James Philip'],
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

const SubList = () => {
  const [YearSubOption, setYearSubOption] = useState(false); //수강대상
  const [ProfSubOption, setProfSubOption] = useState(false); //교수
  const [TimeSubOption, setTimeSubOption] = useState(false); //수업교시
  const [LangSubOption, setLangSubOption] = useState(false); //강의언어
  const [ZoomSubOption, setZoomSubOption] = useState(false); //비대면
  const [FoldActivated,setFoldActivated] = useState(true);
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [sectionWidth, setSectionWidth] = useState(window.innerWidth);

    
  const [checkData, setCheckData] = useState({
    name: '',
    status: '',
  });
  
    

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
                  ? setYearSubOption(true) // 수강대상클릭, 비활성화상태
                  : setYearSubOption(false) // 수강대상클릭이지만, 활성화 되어있을때
                : setYearSubOption(false);// 다른거 클릭
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
        {
        YearSubOption === true ? (
          subOptionData.map((subject) => (
            FoldActivated === true ?(
              <ScrollArea section = {2} number = {1}>
                <ScrollBarArea>
                  {subject.YearArray.map((subject, num) => (
                    <CheckContainer>
                      <SubContainer>
                        <input
                          type="checkbox"
                          id={'y' + num}
                          style={{ width: '15px', height: '15px', marginRight: '8px' }}
                          // checked={}
                          // onChange={()=>setCheckboxValue(!checkboxValue)}
                        />
                        <ChkLabel for={'y' + num}>{subject}</ChkLabel>
                      </SubContainer>
                    </CheckContainer>
                  ))}
                </ScrollBarArea>
                <FoldBtn onClick = {()=>{setFoldActivated(!FoldActivated)}}>접기 ∧</FoldBtn>
              </ScrollArea>
              )
             :<br/>
        
            ))
        ) : ProfSubOption === true ? (
          subOptionData.map((subject) => (
            FoldActivated === true ?(
              <ScrollArea section = {2} number = {2}>
                <ScrollBarArea>
                  {subject.ProfArray.map((subject, num) => (
                    <CheckContainer>
                      <SubContainer>
                        <input
                          type="checkbox"
                          id={num}
                          style={{ width: '15px', height: '15px', marginRight: '8px' }}
                          // checked={}
                          // onChange={()=>setCheckboxValue(!checkboxValue)}
                        />
                        <ChkLabel for={num}>{subject}</ChkLabel>
                      </SubContainer>
                    </CheckContainer>
                  ))}
                </ScrollBarArea>
                <FoldBtn onClick = {()=>{setFoldActivated(!FoldActivated)}}>접기 ∧</FoldBtn>
              </ScrollArea>
              )
             :<br/>
        
            ))
        ) : TimeSubOption === true ? (
          subOptionData.map((subject) => (
            FoldActivated === true ?(
              <ScrollArea section = {2} number = {3}>
                <ScrollBarArea>
                  {subject.TimeArray.map((subject, num) => (
                    <CheckContainer>
                      <SubContainer>
                        <input
                          type="checkbox"
                          id={num}
                          style={{ width: '15px', height: '15px', marginRight: '8px' }}
                          // checked={}
                          // onChange={()=>setCheckboxValue(!checkboxValue)}
                        />
                        <ChkLabel for={num}>{subject}</ChkLabel>
                      </SubContainer>
                    </CheckContainer>
                  ))}
                </ScrollBarArea>
                <FoldBtn onClick = {()=>{setFoldActivated(!FoldActivated)}}>접기 ∧</FoldBtn>
              </ScrollArea>
              )
             :<br/>
        
            ))
        ) : LangSubOption === true ? (
          subOptionData.map((subject) => (
            FoldActivated === true ?(
              <ScrollArea section = {2} number = {4}>
                <ScrollBarArea>
                  {subject.LangArray.map((subject, num) => (
                    <CheckContainer>
                      <SubContainer>
                        <input
                          type="checkbox"
                          id={num}
                          style={{ width: '15px', height: '15px', marginRight: '8px' }}
                          // checked={}
                          // onChange={()=>setCheckboxValue(!checkboxValue)}
                        />
                        <ChkLabel for={num}>{subject}</ChkLabel>
                      </SubContainer>
                    </CheckContainer>
                  ))}
                </ScrollBarArea>
                <FoldBtn onClick = {()=>{setFoldActivated(!FoldActivated)}}>접기 ∧</FoldBtn>
              </ScrollArea>
              )
             :<br/>
        
            ))
        ) : ZoomSubOption === true ? (
          subOptionData.map((subject) => (
            FoldActivated === true ?(
              <ScrollArea section = {2} number = {5}>
                <ScrollBarArea>
                  {subject.ZoomArray.map((subject, num) => (
                    <CheckContainer>
                      <SubContainer>
                        <input
                          type="checkbox"
                          id={num}
                          style={{ width: '15px', height: '15px', marginRight: '8px' }}
                          // checked={}
                          // onChange={()=>setCheckboxValue(!checkboxValue)}
                        />
                        <ChkLabel for={num}>{subject}</ChkLabel>
                      </SubContainer>
                    </CheckContainer>
                  ))}
                </ScrollBarArea>
                <FoldBtn onClick = {()=>{setFoldActivated(!FoldActivated)}}>접기 ∧</FoldBtn>
              </ScrollArea>
              )
             :<br/>
        
            ))
        ) : (
          <div>세부옵션을 선택해 주세요</div>
        )}
      </CheckboxContainer>
    </SectionContainer>
  );
};

export default SubList;
