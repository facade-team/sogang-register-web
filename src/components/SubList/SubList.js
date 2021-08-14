import React, { useEffect, useState } from 'react';
import {
  ListContainer,
  OptionContainer,
  SectionContainer,
  ListBtn,
  CheckboxContainer,
  CurrentFilterList,
  FilterArea,
} from './SubList.element';
import {
  ScrollArea,
  FoldBtn,
  ScrollBarArea,
} from '../ScrollData/ScrollData.element';
import {
  CheckContainer,
  ChkLabel,
  SubContainer,
} from '../Checkbox/Checkbox.element';

export const subOptionData = [
  {
    YearArray: ['1학년', '2학년', '3학년', '4학년'],
    ProfArray: [
      '채서영',
      'Barrie Michael Jonathan Mathew',
      '신경원',
      '황은주',
      'Disney, Daniel James Philip',
    ],
    TimeArray: ['1교시', '2교시', '3교시', '4교시', '5교시', '6교시', '7교시'],
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

  const [yearFoldActivated, setYearFoldActivated] = useState(true);
  const [yearSelectedOption, setYearSelectedOption] = useState([]); // 수강대상 선택한 필터 담긴 배열
  const [yearFlag, setYearFlag] = useState(false);

  const [profFoldActivated, setProfFoldActivated] = useState(true);
  const [profSelectedOption, setProfSelectedOption] = useState([]); // 교수 선택한 필터 담긴 배열
  const [profFlag, setProfFlag] = useState(false);

  const [timeFoldActivated, setTimeFoldActivated] = useState(true);
  const [timeSelectedOption, setTimeSelectedOption] = useState([]); // 수업교시 선택한 필터 담긴 배열
  const [timeFlag, setTimeFlag] = useState(false);

  const [langFoldActivated, setLangFoldActivated] = useState(true);
  const [langSelectedOption, setLangSelectedOption] = useState([]); // 강의언어 선택한 필터 담긴 배열
  const [langFlag, setLangFlag] = useState(false);

  const [zoomFoldActivated, setZoomFoldActivated] = useState(true);
  const [zoomSelectedOption, setZoomSelectedOption] = useState([]); // 대면수업 선택한 필터 담긴 배열
  const [zoomFlag, setZoomFlag] = useState(false);

  useEffect(() => {
    if (yearFlag === true) {
      yearFoldControler();
    }
  }, [yearFlag]);

  const yearControler = () => {
    if (YearSubOption === true) {
      if (yearSelectedOption.length !== 0) {
        if (yearFoldActivated === true) {
          setYearFoldActivated(false);
        } else {
          setYearFoldActivated(true);
        }
      } else {
        setYearSubOption(false);
      }
    } else {
      setYearSubOption(true);
      setYearFoldActivated(true);
    }
  };

  const yearFoldControler = () => {
    setYearFoldActivated(!yearFoldActivated);
    if (yearSelectedOption.length !== 0) {
      setYearSubOption(true);
      setYearFoldActivated(false);
    } else {
      setYearFoldActivated(false);
      setYearSubOption(false);
    }
  };

  const yearAddSelected = (subject) => {
    const sub = yearSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let yearlist = [...yearSelectedOption];

    if (sub === undefined) {
      yearlist = yearSelectedOption.concat(subject);
      yearlist.sort();
      setYearSelectedOption(yearlist);
      setYearFlag(false);
    } else {
      const idx = yearSelectedOption.indexOf(sub);
      if (idx > -1) {
        yearlist.splice(idx, 1);
      }
      yearlist.sort();
      setYearSelectedOption(yearlist);
    }
  };
  const yearMinusSelected = (subject) => {
    const sub = yearSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let yearlist = [...yearSelectedOption];

    if (sub !== undefined) {
      const idx = yearSelectedOption.indexOf(sub);
      if (idx > -1) {
        yearlist.splice(idx, 1);
        if (yearlist.length === 0) {
          setYearFlag(true);
        }
      }
      yearlist.sort();
      setYearSelectedOption(yearlist);
    }
  };

  useEffect(() => {
    if (profFlag === true) {
      profFoldControler();
    }
  }, [profFlag]);

  const profControler = () => {
    if (ProfSubOption === true) {
      if (profSelectedOption.length !== 0) {
        if (profFoldActivated === true) {
          setProfFoldActivated(false);
        } else {
          setProfFoldActivated(true);
        }
      } else {
        setProfSubOption(false);
      }
    } else {
      setProfSubOption(true);
      setProfFoldActivated(true);
    }
  };

  const profFoldControler = () => {
    setProfFoldActivated(!profFoldActivated);
    if (profSelectedOption.length !== 0) {
      setProfSubOption(true);
      setProfFoldActivated(false);
    } else {
      setProfFoldActivated(false);
      setProfSubOption(false);
    }
  };

  const profAddSelected = (subject) => {
    const sub = profSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let proflist = [...profSelectedOption];

    if (sub === undefined) {
      proflist = profSelectedOption.concat(subject);
      proflist.sort();
      setProfSelectedOption(proflist);
      setProfFlag(false);
    } else {
      const idx = profSelectedOption.indexOf(sub);
      if (idx > -1) {
        proflist.splice(idx, 1);
      }
      proflist.sort();
      setProfSelectedOption(proflist);
    }
  };
  const profMinusSelected = (subject) => {
    const sub = profSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let proflist = [...profSelectedOption];

    if (sub !== undefined) {
      const idx = profSelectedOption.indexOf(sub);
      if (idx > -1) {
        proflist.splice(idx, 1);
        if (proflist.length === 0) {
          setProfFlag(true);
        }
      }
      proflist.sort();
      setProfSelectedOption(proflist);
    }
  };

  useEffect(() => {
    if (timeFlag === true) {
      timeFoldControler();
    }
  }, [timeFlag]);

  const timeControler = () => {
    if (TimeSubOption === true) {
      if (timeSelectedOption.length !== 0) {
        if (timeFoldActivated === true) {
          setTimeFoldActivated(false);
        } else {
          setTimeFoldActivated(true);
        }
      } else {
        setTimeSubOption(false);
      }
    } else {
      setTimeSubOption(true);
      setTimeFoldActivated(true);
    }
  };

  const timeFoldControler = () => {
    setTimeFoldActivated(!timeFoldActivated);
    if (timeSelectedOption.length !== 0) {
      setTimeSubOption(true);
      setTimeFoldActivated(false);
    } else {
      setTimeFoldActivated(false);
      setTimeSubOption(false);
    }
  };

  const timeAddSelected = (subject) => {
    const sub = timeSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let timelist = [...timeSelectedOption];

    if (sub === undefined) {
      timelist = timeSelectedOption.concat(subject);
      timelist.sort();
      setTimeSelectedOption(timelist);
      setTimeFlag(false);
    } else {
      const idx = timeSelectedOption.indexOf(sub);
      if (idx > -1) {
        timelist.splice(idx, 1);
      }
      timelist.sort();
      setTimeSelectedOption(timelist);
    }
  };
  const timeMinusSelected = (subject) => {
    const sub = timeSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let timelist = [...timeSelectedOption];

    if (sub !== undefined) {
      const idx = timeSelectedOption.indexOf(sub);
      if (idx > -1) {
        timelist.splice(idx, 1);
        if (timelist.length === 0) {
          setTimeFlag(true);
        }
      }
      timelist.sort();
      setTimeSelectedOption(timelist);
    }
  };

  useEffect(() => {
    if (langFlag === true) {
      langFoldControler();
    }
  }, [langFlag]);

  const langControler = () => {
    if (LangSubOption === true) {
      if (langSelectedOption.length !== 0) {
        if (langFoldActivated === true) {
          setLangFoldActivated(false);
        } else {
          setLangFoldActivated(true);
        }
      } else {
        setLangSubOption(false);
      }
    } else {
      setLangSubOption(true);
      setLangFoldActivated(true);
    }
  };

  const langFoldControler = () => {
    setLangFoldActivated(!langFoldActivated);
    if (langSelectedOption.length !== 0) {
      setLangSubOption(true);
      setLangFoldActivated(false);
    } else {
      setLangFoldActivated(false);
      setLangSubOption(false);
    }
  };

  const langAddSelected = (subject) => {
    const sub = langSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let langlist = [...langSelectedOption];

    if (sub === undefined) {
      langlist = langSelectedOption.concat(subject);
      langlist.sort();
      setLangSelectedOption(langlist);
      setLangFlag(false);
    } else {
      const idx = langSelectedOption.indexOf(sub);
      if (idx > -1) {
        langlist.splice(idx, 1);
      }
      langlist.sort();
      setLangSelectedOption(langlist);
    }
  };
  const langMinusSelected = (subject) => {
    const sub = langSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let langlist = [...langSelectedOption];

    if (sub !== undefined) {
      const idx = langSelectedOption.indexOf(sub);
      if (idx > -1) {
        langlist.splice(idx, 1);
        if (langlist.length === 0) {
          setLangFlag(true);
        }
      }
      langlist.sort();
      setLangSelectedOption(langlist);
    }
  };

  useEffect(() => {
    if (zoomFlag === true) {
      zoomFoldControler();
    }
  }, [zoomFlag]);

  const zoomControler = () => {
    if (ZoomSubOption === true) {
      if (zoomSelectedOption.length !== 0) {
        if (zoomFoldActivated === true) {
          setZoomFoldActivated(false);
        } else {
          setZoomFoldActivated(true);
        }
      } else {
        setZoomSubOption(false);
      }
    } else {
      setZoomSubOption(true);
      setZoomFoldActivated(true);
    }
  };

  const zoomFoldControler = () => {
    setZoomFoldActivated(!zoomFoldActivated);
    if (zoomSelectedOption.length !== 0) {
      setZoomSubOption(true);
      setZoomFoldActivated(false);
    } else {
      setZoomFoldActivated(false);
      setZoomSubOption(false);
    }
  };

  const zoomAddSelected = (subject) => {
    const sub = zoomSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let zoomlist = [...zoomSelectedOption];

    if (sub === undefined) {
      zoomlist = zoomSelectedOption.concat(subject);
      zoomlist.sort();
      setZoomSelectedOption(zoomlist);
      setZoomFlag(false);
    } else {
      const idx = zoomSelectedOption.indexOf(sub);
      if (idx > -1) {
        zoomlist.splice(idx, 1);
      }
      zoomlist.sort();
      setZoomSelectedOption(zoomlist);
    }
  };
  const zoomMinusSelected = (subject) => {
    const sub = zoomSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let zoomlist = [...zoomSelectedOption];

    if (sub !== undefined) {
      const idx = zoomSelectedOption.indexOf(sub);
      if (idx > -1) {
        zoomlist.splice(idx, 1);
        if (zoomlist.length === 0) {
          setZoomFlag(true);
        }
      }
      zoomlist.sort();
      setZoomSelectedOption(zoomlist);
    }
  };

  const List = (props) => {
    return (
      <ListContainer>
        <ListBtn
          focused={props.focused}
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            {
              props.name === '수강대상'
                ? yearControler()
                : setYearSubOption(false) && setYearFoldActivated(false);
              props.name === '교수'
                ? profControler()
                : setProfSubOption(false) && setProfFoldActivated(false);
              props.name === '수업교시'
                ? timeControler()
                : setTimeSubOption(false) && setTimeFoldActivated(false);
              props.name === '강의언어'
                ? langControler()
                : setLangSubOption(false) && setLangFoldActivated(false);
              props.name === '대면수업'
                ? zoomControler()
                : setZoomSubOption(false) && setZoomFoldActivated(false);
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
        {/* <List name="수강대상" focused={YearSubOption}></List> */}
        <List name="교수" focused={ProfSubOption}></List>
        <List name="수업교시" focused={TimeSubOption}></List>
        <List name="강의언어" focused={LangSubOption}></List>
        <List name="대면수업" focused={ZoomSubOption}></List>
      </OptionContainer>

      {YearSubOption === true
        ? subOptionData.map((subject) =>
            yearFoldActivated === true ? (
              <CheckboxContainer>
                <ScrollArea section={2} number={1}>
                  <ScrollBarArea>
                    {subject.YearArray.map((subdata, num) => (
                      <CheckContainer>
                        <SubContainer>
                          <input
                            type="checkbox"
                            id={num}
                            style={{
                              width: '15px',
                              height: '15px',
                              marginRight: '8px',
                            }}
                            checked={
                              yearSelectedOption.indexOf(subdata) === -1
                                ? false
                                : true
                            }
                            onChange={() => yearAddSelected(subdata)}
                          />
                          <ChkLabel
                            for={num}
                            checked={yearSelectedOption.indexOf(subdata)}
                          >
                            {subdata}
                          </ChkLabel>
                        </SubContainer>
                      </CheckContainer>
                    ))}
                  </ScrollBarArea>
                  <FoldBtn
                    onClick={() => {
                      yearFoldControler();
                    }}
                  >
                    접기 ∧
                  </FoldBtn>
                </ScrollArea>
                <div></div>
              </CheckboxContainer>
            ) : (
              <FilterArea>
                현재 선택된 필터 :
                {yearSelectedOption.map((subject) => (
                  <CurrentFilterList
                    onClick={() => {
                      yearMinusSelected(subject);
                    }}
                  >
                    {subject} x
                  </CurrentFilterList>
                ))}
              </FilterArea>
            )
          )
        : ProfSubOption === true
        ? subOptionData.map((subject) =>
            profFoldActivated === true ? (
              <CheckboxContainer>
                <ScrollArea section={2} number={1}>
                  <ScrollBarArea>
                    {subject.ProfArray.map((subdata, num) => (
                      <CheckContainer>
                        <SubContainer>
                          <input
                            type="checkbox"
                            id={num}
                            style={{
                              width: '15px',
                              height: '15px',
                              marginRight: '8px',
                            }}
                            checked={
                              profSelectedOption.indexOf(subdata) === -1
                                ? false
                                : true
                            }
                            onChange={() => profAddSelected(subdata)}
                          />
                          <ChkLabel
                            for={num}
                            checked={profSelectedOption.indexOf(subdata)}
                          >
                            {subdata}
                          </ChkLabel>
                        </SubContainer>
                      </CheckContainer>
                    ))}
                  </ScrollBarArea>
                  <FoldBtn
                    onClick={() => {
                      profFoldControler();
                    }}
                  >
                    접기 ∧
                  </FoldBtn>
                </ScrollArea>
              </CheckboxContainer>
            ) : (
              <FilterArea>
                현재 선택된 필터 :
                {profSelectedOption.map((subject) => (
                  <CurrentFilterList
                    onClick={() => {
                      profMinusSelected(subject);
                    }}
                  >
                    {subject} x
                  </CurrentFilterList>
                ))}
              </FilterArea>
            )
          )
        : TimeSubOption === true
        ? subOptionData.map((subject) =>
            timeFoldActivated === true ? (
              <CheckboxContainer>
                <ScrollArea section={2} number={2}>
                  <ScrollBarArea>
                    {subject.TimeArray.map((subdata, num) => (
                      <CheckContainer>
                        <SubContainer>
                          <input
                            type="checkbox"
                            id={num}
                            style={{
                              width: '15px',
                              height: '15px',
                              marginRight: '8px',
                            }}
                            checked={
                              timeSelectedOption.indexOf(subdata) === -1
                                ? false
                                : true
                            }
                            onChange={() => timeAddSelected(subdata)}
                          />
                          <ChkLabel
                            for={num}
                            checked={timeSelectedOption.indexOf(subdata)}
                          >
                            {subdata}
                          </ChkLabel>
                        </SubContainer>
                      </CheckContainer>
                    ))}
                  </ScrollBarArea>
                  <FoldBtn
                    onClick={() => {
                      timeFoldControler();
                    }}
                  >
                    접기 ∧
                  </FoldBtn>
                </ScrollArea>
              </CheckboxContainer>
            ) : (
              <FilterArea>
                현재 선택된 필터 :
                {timeSelectedOption.map((subject) => (
                  <CurrentFilterList
                    onClick={() => {
                      timeMinusSelected(subject);
                    }}
                  >
                    {subject} x
                  </CurrentFilterList>
                ))}
              </FilterArea>
            )
          )
        : LangSubOption === true
        ? subOptionData.map((subject) =>
            langFoldActivated === true ? (
              <CheckboxContainer>
                <ScrollArea section={2} number={3}>
                  <ScrollBarArea>
                    {subject.LangArray.map((subdata, num) => (
                      <CheckContainer>
                        <SubContainer>
                          <input
                            type="checkbox"
                            id={num}
                            style={{
                              width: '15px',
                              height: '15px',
                              marginRight: '8px',
                            }}
                            checked={
                              langSelectedOption.indexOf(subdata) === -1
                                ? false
                                : true
                            }
                            onChange={() => langAddSelected(subdata)}
                          />
                          <ChkLabel
                            for={num}
                            checked={langSelectedOption.indexOf(subdata)}
                          >
                            {subdata}
                          </ChkLabel>
                        </SubContainer>
                      </CheckContainer>
                    ))}
                  </ScrollBarArea>
                  <FoldBtn
                    onClick={() => {
                      langFoldControler();
                    }}
                  >
                    접기 ∧
                  </FoldBtn>
                </ScrollArea>
              </CheckboxContainer>
            ) : (
              <FilterArea>
                현재 선택된 필터 :
                {langSelectedOption.map((subject) => (
                  <CurrentFilterList
                    onClick={() => {
                      langMinusSelected(subject);
                    }}
                  >
                    {subject} x
                  </CurrentFilterList>
                ))}
              </FilterArea>
            )
          )
        : ZoomSubOption === true
        ? subOptionData.map((subject) =>
            zoomFoldActivated === true ? (
              <CheckboxContainer>
                <ScrollArea section={2} number={4}>
                  <ScrollBarArea>
                    {subject.ZoomArray.map((subdata, num) => (
                      <CheckContainer>
                        <SubContainer>
                          <input
                            type="checkbox"
                            id={num}
                            style={{
                              width: '15px',
                              height: '15px',
                              marginRight: '8px',
                            }}
                            checked={
                              zoomSelectedOption.indexOf(subdata) === -1
                                ? false
                                : true
                            }
                            onChange={() => zoomAddSelected(subdata)}
                          />
                          <ChkLabel
                            for={num}
                            checked={zoomSelectedOption.indexOf(subdata)}
                          >
                            {subdata}
                          </ChkLabel>
                        </SubContainer>
                      </CheckContainer>
                    ))}
                  </ScrollBarArea>
                  <FoldBtn
                    onClick={() => {
                      zoomFoldControler();
                    }}
                  >
                    접기 ∧
                  </FoldBtn>
                </ScrollArea>
              </CheckboxContainer>
            ) : (
              <FilterArea>
                현재 선택된 필터 :
                {zoomSelectedOption.map((subject) => (
                  <CurrentFilterList
                    onClick={() => {
                      zoomMinusSelected(subject);
                    }}
                  >
                    {subject} x
                  </CurrentFilterList>
                ))}
              </FilterArea>
            )
          )
        : null}
    </SectionContainer>
  );
};

export default SubList;
