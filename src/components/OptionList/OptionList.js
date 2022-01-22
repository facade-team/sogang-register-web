import React, { useState, useEffect } from 'react';
import {
  SectionContainer,
  ListContainer,
  ListBtn,
  SearchContainer,
  OptionContainer,
  ChkLabel,
  ScrollArea,
  ScrollBarArea,
  CheckContainer,
  FoldBtn,
  FilterArea,
  CurrentFilterList,
  SubContainer,
} from './OptionList.element';
import Select from 'react-select';

const Semester = [
  '2022 1학기',
  '2021 동계',
  '2021 2학기',
  '2021 하계',
  '2021 1학기',
  '2020 동계',
  '2020 2학기',
  '2020 하계',
  '2020 1학기',
  '2019 동계',
  '2019 2학기',
  '2019 하계',
  '2019 1학기',
  '2018 동계',
  '2018 2학기',
  '2018 하계',
  '2018 1학기',
];
const Major = [
  '전인교육원 (전체)',
  '전인교육원 (공통필수)',
  '전인교육원 (공통선택)',
  '전인교육원 (자유선택)',
  '전인교육원 (전공입문)',
  '국어국문학',
  '사학',
  '철학',
  '종교학',
  '영미어문',
  '미국문화',
  '유럽문화',
  '독일문화',
  '프랑스문화',
  '중국문화',
  '일본문화',
  '사회학',
  '정치외교학',
  '심리학',
  '법학',
  '경제학',
  '경영학',
  '커뮤니케이션학',
  '지식융합미디어학부',
  '글로벌한국학',
  '신문방송학',
  '아트&테크놀로지',
  '미디어&엔터테인먼트',
  '수학',
  '물리학',
  '화학',
  '생명과학',
  '전자공학',
  '컴퓨터공학',
  '화공생명공학',
  '기계공학',
  '바이오융합기술',
  '교육문화',
  '여성학',
  '정치학.경제학.철학',
  '공공인재',
  '스포츠미디어',
  '군이러닝',
  '동아시아학연계전공',
  '빅데이터 사이언스(데이터분석)',
  '빅데이터 사이언스(데이터엔지니어)',
  '스타트업',
  '융합소프트웨어',
  '융합소프트웨어(인문콘텐츠융합)',
  '인공지능',
  '한국발전과국제개발협력',
  '한국사회문화',
  '교환',
  '타대학',
  '특별수강',
];
const Grade = ['1학년', '2학년', '3학년', '4학년'];
const Credit = ['1학점', '2학점', '3학점'];

const OptionList = () => {
  const [SemeOption, setSemeOption] = useState(false); // 학년도 / 학기
  const [MajorOption, setMajorOption] = useState(false); // 전공 / 영역
  const [HourOption, setHourOption] = useState(false); // 시간
  const [GradeOption, setGradeOption] = useState(false); // 학년
  const [CredOption, setCredOption] = useState(false); // 학점
  const [SrchOption, setSrchOption] = useState(false); // 검색어

  const [semeFoldActivated, setSemeFoldActivated] = useState(false);
  const [semeSelectedOption, setSemeSelectedOption] = useState([]); // 수강대상 선택한 필터 담긴 배열
  const [semeFlag, setSemeFlag] = useState(false);

  const [majorFoldActivated, setMajorFoldActivated] = useState(false);
  const [majorSelectedOption, setMajorSelectedOption] = useState([]); // 수강대상 선택한 필터 담긴 배열
  const [majorFlag, setMajorFlag] = useState(false);

  const [hourFoldActivated, setHourFoldActivated] = useState(false);
  const [hourSelectedOption, setHourSelectedOption] = useState([]); // 수강대상 선택한 필터 담긴 배열
  const [hourFlag, setHourFlag] = useState(false);

  const [gradeFoldActivated, setGradeFoldActivated] = useState(false);
  const [gradeSelectedOption, setGradeSelectedOption] = useState([]); // 수강대상 선택한 필터 담긴 배열
  const [gradeFlag, setGradeFlag] = useState(false);

  const [credFoldActivated, setCredFoldActivated] = useState(false);
  const [credSelectedOption, setCredSelectedOption] = useState([]); // 수강대상 선택한 필터 담긴 배열
  const [credFlag, setCredFlag] = useState(false);

  const [srchFoldActivated, setSrchFoldActivated] = useState(false);
  const [srchSelectedOption, setSrchSelectedOption] = useState([]); // 수강대상 선택한 필터 담긴 배열
  const [srchFlag, setSrchFlag] = useState(false);

  useEffect(() => {
    if (semeFlag === true) {
      semeFoldControler();
    }
  }, [semeFlag]);

  const semeControler = () => {
    if (SemeOption === true) {
      if (semeSelectedOption.length !== 0) {
        if (semeFoldActivated === true) {
          setSemeFoldActivated(false);
        } else {
          setSemeFoldActivated(true);
        }
      } else {
        setSemeOption(false);
      }
    } else {
      setSemeOption(true);
      setSemeFoldActivated(true);
    }
  };

  const semeFoldControler = () => {
    setSemeFoldActivated(!semeFoldActivated);
    if (semeSelectedOption.length !== 0) {
      setSemeOption(true);
      setSemeFoldActivated(false);
    } else {
      setSemeFoldActivated(false);
      setSemeOption(false);
    }
  };

  const semeAddSelected = (subject) => {
    const sub = semeSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let semelist = [...semeSelectedOption];

    if (sub === undefined) {
      semelist = semeSelectedOption.concat(subject);
      semelist.sort();
      setSemeSelectedOption(semelist);
      setSemeFlag(false);
    } else {
      const idx = semeSelectedOption.indexOf(sub);
      if (idx > -1) {
        semelist.splice(idx, 1);
      }
      semelist.sort();
      setSemeSelectedOption(semelist);
    }
  };
  const semeMinusSelected = (subject) => {
    const sub = semeSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let semelist = [...semeSelectedOption];

    if (sub !== undefined) {
      const idx = semeSelectedOption.indexOf(sub);
      if (idx > -1) {
        semelist.splice(idx, 1);
        if (semelist.length === 0) {
          setSemeFlag(true);
        }
      }
      semelist.sort();
      setSemeSelectedOption(semelist);
    }
  };

  useEffect(() => {
    if (majorFlag === true) {
      majorFoldControler();
    }
  }, [majorFlag]);

  const majorControler = () => {
    if (MajorOption === true) {
      if (majorSelectedOption.length !== 0) {
        if (majorFoldActivated === true) {
          setMajorFoldActivated(false);
        } else {
          setMajorFoldActivated(true);
        }
      } else {
        setMajorOption(false);
      }
    } else {
      setMajorOption(true);
      setMajorFoldActivated(true);
    }
  };

  const majorFoldControler = () => {
    setMajorFoldActivated(!majorFoldActivated);
    if (majorSelectedOption.length !== 0) {
      setMajorOption(true);
      setMajorFoldActivated(false);
    } else {
      setMajorFoldActivated(false);
      setMajorOption(false);
    }
  };

  const majorAddSelected = (subject) => {
    const sub = majorSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let majorlist = [...majorSelectedOption];

    if (sub === undefined) {
      majorlist = majorSelectedOption.concat(subject);
      majorlist.sort();
      setMajorSelectedOption(majorlist);
      setMajorFlag(false);
    } else {
      const idx = majorSelectedOption.indexOf(sub);
      if (idx > -1) {
        majorlist.splice(idx, 1);
      }
      majorlist.sort();
      setMajorSelectedOption(majorlist);
    }
  };
  const majorMinusSelected = (subject) => {
    const sub = majorSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let majorlist = [...majorSelectedOption];

    if (sub !== undefined) {
      const idx = majorSelectedOption.indexOf(sub);
      if (idx > -1) {
        majorlist.splice(idx, 1);
        if (majorlist.length === 0) {
          setMajorFlag(true);
        }
      }
      majorlist.sort();
      setMajorSelectedOption(majorlist);
    }
  };

  useEffect(() => {
    if (hourFlag === true) {
      hourFoldControler();
    }
  }, [hourFlag]);

  const hourControler = () => {
    if (HourOption === true) {
      if (hourSelectedOption.length !== 0) {
        if (hourFoldActivated === true) {
          setHourFoldActivated(false);
        } else {
          setHourFoldActivated(true);
        }
      } else {
        setHourOption(false);
      }
    } else {
      setHourOption(true);
      setHourFoldActivated(true);
    }
  };

  const hourFoldControler = () => {
    setHourFoldActivated(!hourFoldActivated);
    if (hourSelectedOption.length !== 0) {
      setHourOption(true);
      setHourFoldActivated(false);
    } else {
      setHourFoldActivated(false);
      setHourOption(false);
    }
  };

  const hourAddSelected = (subject) => {
    const sub = hourSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let hourlist = [...hourSelectedOption];

    if (sub === undefined) {
      hourlist = hourSelectedOption.concat(subject);
      hourlist.sort();
      setHourSelectedOption(hourlist);
      setHourFlag(false);
    } else {
      const idx = hourSelectedOption.indexOf(sub);
      if (idx > -1) {
        hourlist.splice(idx, 1);
      }
      hourlist.sort();
      setHourSelectedOption(hourlist);
    }
  };
  const hourMinusSelected = (subject) => {
    const sub = hourSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let hourlist = [...hourSelectedOption];

    if (sub !== undefined) {
      const idx = hourSelectedOption.indexOf(sub);
      if (idx > -1) {
        hourlist.splice(idx, 1);
        if (hourlist.length === 0) {
          setHourFlag(true);
        }
      }
      hourlist.sort();
      setHourSelectedOption(hourlist);
    }
  };

  useEffect(() => {
    if (gradeFlag === true) {
      gradeFoldControler();
    }
  }, [gradeFlag]);

  const gradeControler = () => {
    if (GradeOption === true) {
      if (gradeSelectedOption.length !== 0) {
        if (gradeFoldActivated === true) {
          setGradeFoldActivated(false);
        } else {
          setGradeFoldActivated(true);
        }
      } else {
        setGradeOption(false);
      }
    } else {
      setGradeOption(true);
      setGradeFoldActivated(true);
    }
  };

  const gradeFoldControler = () => {
    setGradeFoldActivated(!gradeFoldActivated);
    if (gradeSelectedOption.length !== 0) {
      setGradeOption(true);
      setGradeFoldActivated(false);
    } else {
      setGradeFoldActivated(false);
      setGradeOption(false);
    }
  };

  const gradeAddSelected = (subject) => {
    const sub = gradeSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let gradelist = [...gradeSelectedOption];

    if (sub === undefined) {
      gradelist = gradeSelectedOption.concat(subject);
      gradelist.sort();
      setGradeSelectedOption(gradelist);
      setGradeFlag(false);
    } else {
      const idx = gradeSelectedOption.indexOf(sub);
      if (idx > -1) {
        gradelist.splice(idx, 1);
      }
      gradelist.sort();
      setGradeSelectedOption(gradelist);
    }
  };
  const gradeMinusSelected = (subject) => {
    const sub = gradeSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let gradelist = [...gradeSelectedOption];

    if (sub !== undefined) {
      const idx = gradeSelectedOption.indexOf(sub);
      if (idx > -1) {
        gradelist.splice(idx, 1);
        if (gradelist.length === 0) {
          setGradeFlag(true);
        }
      }
      gradelist.sort();
      setGradeSelectedOption(gradelist);
    }
  };

  useEffect(() => {
    if (credFlag === true) {
      credFoldControler();
    }
  }, [credFlag]);

  const credControler = () => {
    if (CredOption === true) {
      if (credSelectedOption.length !== 0) {
        if (credFoldActivated === true) {
          setCredFoldActivated(false);
        } else {
          setCredFoldActivated(true);
        }
      } else {
        setCredOption(false);
      }
    } else {
      setCredOption(true);
      setCredFoldActivated(true);
    }
  };

  const credFoldControler = () => {
    setCredFoldActivated(!credFoldActivated);
    if (credSelectedOption.length !== 0) {
      setCredOption(true);
      setCredFoldActivated(false);
    } else {
      setCredFoldActivated(false);
      setCredOption(false);
    }
  };

  const credAddSelected = (subject) => {
    const sub = credSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let credlist = [...credSelectedOption];

    if (sub === undefined) {
      credlist = credSelectedOption.concat(subject);
      credlist.sort();
      setCredSelectedOption(credlist);
      setCredFlag(false);
    } else {
      const idx = credSelectedOption.indexOf(sub);
      if (idx > -1) {
        credlist.splice(idx, 1);
      }
      credlist.sort();
      setCredSelectedOption(credlist);
    }
  };
  const credMinusSelected = (subject) => {
    const sub = credSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let credlist = [...credSelectedOption];

    if (sub !== undefined) {
      const idx = credSelectedOption.indexOf(sub);
      if (idx > -1) {
        credlist.splice(idx, 1);
        if (credlist.length === 0) {
          setCredFlag(true);
        }
      }
      credlist.sort();
      setCredSelectedOption(credlist);
    }
  };

  useEffect(() => {
    if (srchFlag === true) {
      srchFoldControler();
    }
  }, [srchFlag]);

  const srchControler = () => {
    if (SrchOption === true) {
      if (srchSelectedOption.length !== 0) {
        if (srchFoldActivated === true) {
          setSrchFoldActivated(false);
        } else {
          setSrchFoldActivated(true);
        }
      } else {
        setSrchOption(false);
      }
    } else {
      setSrchOption(true);
      setSrchFoldActivated(true);
    }
  };

  const srchFoldControler = () => {
    setSrchFoldActivated(!srchFoldActivated);
    if (srchSelectedOption.length !== 0) {
      setSrchOption(true);
      setSrchFoldActivated(false);
    } else {
      setSrchFoldActivated(false);
      setSrchOption(false);
    }
  };

  const srchAddSelected = (subject) => {
    const sub = srchSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let srchlist = [...srchSelectedOption];

    if (sub === undefined) {
      srchlist = srchSelectedOption.concat(subject);
      srchlist.sort();
      setSrchSelectedOption(srchlist);
      setSrchFlag(false);
    } else {
      const idx = srchSelectedOption.indexOf(sub);
      if (idx > -1) {
        srchlist.splice(idx, 1);
      }
      srchlist.sort();
      setSrchSelectedOption(srchlist);
    }
  };
  const srchMinusSelected = (subject) => {
    const sub = srchSelectedOption.find((selected) => {
      return selected === subject;
    }); // 이미 선택된 옵션에 있으면 값을 return, 없으면 undefined return
    let srchlist = [...srchSelectedOption];

    if (sub !== undefined) {
      const idx = srchSelectedOption.indexOf(sub);
      if (idx > -1) {
        srchlist.splice(idx, 1);
        if (srchlist.length === 0) {
          setSrchFlag(true);
        }
      }
      srchlist.sort();
      setSrchSelectedOption(srchlist);
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
              props.name === '학년도/학기'
                ? semeControler()
                : setSemeOption(false) && setSemeFoldActivated(false);
              props.name === '전공/영역'
                ? majorControler()
                : setMajorOption(false) && setMajorFoldActivated(false);
              props.name === '시간'
                ? hourControler()
                : setHourOption(false) && setHourFoldActivated(false);
              props.name === '학년'
                ? gradeControler()
                : setGradeOption(false) && setGradeFoldActivated(false);
              props.name === '학점'
                ? credControler()
                : setCredOption(false) && setCredFoldActivated(false);
              props.name === '검색어'
                ? srchControler()
                : setSrchOption(false) && setSrchFoldActivated(false);
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
        <List name="학년도/학기" focused={SemeOption}></List>
        <List name="전공/영역" focused={MajorOption}></List>
        <List name="시간" focused={HourOption}></List>
        <List name="학년" focused={GradeOption}></List>
        <List name="학점" focused={CredOption}></List>
        <List name="검색어" focused={SrchOption}></List>
      </OptionContainer>

      {SemeOption === true ? (
        semeFoldActivated === true ? (
          <SearchContainer>
            <ScrollArea section={1} number={1}>
              <ScrollBarArea>
                {Semester.map((subject, num) => (
                  <CheckContainer>
                    <SubContainer>
                      <input
                        type="radio"
                        id={num}
                        name="seme"
                        style={{
                          width: '10px',
                          height: '10px',
                          marginRight: '8px',
                        }}
                        checked={
                          semeSelectedOption.indexOf(subject) === -1
                            ? false
                            : true
                        }
                        onChange={() => semeAddSelected(subject)}
                      />
                      <ChkLabel
                        for={num}
                        checked={semeSelectedOption.indexOf(subject)}
                      >
                        {subject}
                      </ChkLabel>
                    </SubContainer>
                  </CheckContainer>
                ))}
              </ScrollBarArea>
              <FoldBtn
                onClick={() => {
                  setSemeFoldActivated(!semeFoldActivated);
                }}
              >
                접기 ∧
              </FoldBtn>
            </ScrollArea>
          </SearchContainer>
        ) : (
          <FilterArea>
            현재 선택된 필터 :
            {semeSelectedOption.map((subject) => (
              <CurrentFilterList
                onClick={() => {
                  semeMinusSelected(subject);
                }}
              >
                {subject} x
              </CurrentFilterList>
            ))}
          </FilterArea>
        )
      ) : MajorOption === true ? (
        majorFoldActivated === true ? (
          <SearchContainer>
            <ScrollArea section={1} number={2}>
              <ScrollBarArea>
                {Major.map((subject, num) => (
                  <CheckContainer>
                    <SubContainer>
                      <input
                        type="checkbox"
                        id={num}
                        name="major"
                        style={{
                          width: '15px',
                          height: '15px',
                          marginRight: '8px',
                        }}
                        checked={
                          majorSelectedOption.indexOf(subject) === -1
                            ? false
                            : true
                        }
                        onChange={() => majorAddSelected(subject)}
                      />
                      <ChkLabel
                        for={num}
                        checked={majorSelectedOption.indexOf(subject)}
                      >
                        {subject}
                      </ChkLabel>
                    </SubContainer>
                  </CheckContainer>
                ))}
              </ScrollBarArea>
              <FoldBtn
                onClick={() => {
                  setMajorFoldActivated(!majorFoldActivated);
                }}
              >
                접기 ∧
              </FoldBtn>
            </ScrollArea>
          </SearchContainer>
        ) : (
          <FilterArea>
            현재 선택된 필터 :
            {majorSelectedOption.map((subject) => (
              <CurrentFilterList
                onClick={() => {
                  majorMinusSelected(subject);
                }}
              >
                {subject} x
              </CurrentFilterList>
            ))}
          </FilterArea>
        )
      ) : HourOption === true ? (
        hourFoldActivated === true ? (
          <SearchContainer>
            <ScrollArea section={1} number={3}>
              <ScrollBarArea>
                {Semester.map((subject, num) => (
                  <CheckContainer>
                    <SubContainer>
                      <input
                        type="checkbox"
                        id={num}
                        name="hour"
                        style={{
                          width: '15px',
                          height: '15px',
                          marginRight: '8px',
                        }}
                        checked={
                          hourSelectedOption.indexOf(subject) === -1
                            ? false
                            : true
                        }
                        onChange={() => hourAddSelected(subject)}
                      />
                      <ChkLabel
                        for={num}
                        checked={hourSelectedOption.indexOf(subject)}
                      >
                        {subject}
                      </ChkLabel>
                    </SubContainer>
                  </CheckContainer>
                ))}
              </ScrollBarArea>
              <FoldBtn
                onClick={() => {
                  setHourFoldActivated(!hourFoldActivated);
                }}
              >
                접기 ∧
              </FoldBtn>
            </ScrollArea>
          </SearchContainer>
        ) : (
          <FilterArea>
            현재 선택된 필터 :
            {hourSelectedOption.map((subject) => (
              <CurrentFilterList
                onClick={() => {
                  hourMinusSelected(subject);
                }}
              >
                {subject} x
              </CurrentFilterList>
            ))}
          </FilterArea>
        )
      ) : GradeOption === true ? (
        gradeFoldActivated === true ? (
          <SearchContainer>
            <ScrollArea section={1} number={4}>
              <ScrollBarArea>
                {Grade.map((subject, num) => (
                  <CheckContainer>
                    <SubContainer>
                      <input
                        type="checkbox"
                        id={num}
                        name="grade"
                        style={{
                          width: '15px',
                          height: '15px',
                          marginRight: '8px',
                        }}
                        checked={
                          gradeSelectedOption.indexOf(subject) === -1
                            ? false
                            : true
                        }
                        onChange={() => gradeAddSelected(subject)}
                      />
                      <ChkLabel
                        for={num}
                        checked={gradeSelectedOption.indexOf(subject)}
                      >
                        {subject}
                      </ChkLabel>
                    </SubContainer>
                  </CheckContainer>
                ))}
              </ScrollBarArea>
              <FoldBtn
                onClick={() => {
                  setGradeFoldActivated(!gradeFoldActivated);
                }}
              >
                접기 ∧
              </FoldBtn>
            </ScrollArea>
          </SearchContainer>
        ) : (
          <FilterArea>
            현재 선택된 필터 :
            {gradeSelectedOption.map((subject) => (
              <CurrentFilterList
                onClick={() => {
                  gradeMinusSelected(subject);
                }}
              >
                {subject} x
              </CurrentFilterList>
            ))}
          </FilterArea>
        )
      ) : CredOption === true ? (
        credFoldActivated === true ? (
          <SearchContainer>
            <ScrollArea section={1} number={5}>
              <ScrollBarArea>
                {Credit.map((subject, num) => (
                  <CheckContainer>
                    <SubContainer>
                      <input
                        type="checkbox"
                        id={num}
                        name="cred"
                        style={{
                          width: '15px',
                          height: '15px',
                          marginRight: '8px',
                        }}
                        checked={
                          credSelectedOption.indexOf(subject) === -1
                            ? false
                            : true
                        }
                        onChange={() => credAddSelected(subject)}
                      />
                      <ChkLabel
                        for={num}
                        checked={credSelectedOption.indexOf(subject)}
                      >
                        {subject}
                      </ChkLabel>
                    </SubContainer>
                  </CheckContainer>
                ))}
              </ScrollBarArea>
              <FoldBtn
                onClick={() => {
                  setCredFoldActivated(!credFoldActivated);
                }}
              >
                접기 ∧
              </FoldBtn>
            </ScrollArea>
          </SearchContainer>
        ) : (
          <FilterArea>
            현재 선택된 필터 :
            {credSelectedOption.map((subject) => (
              <CurrentFilterList
                onClick={() => {
                  credMinusSelected(subject);
                }}
              >
                {subject} x
              </CurrentFilterList>
            ))}
          </FilterArea>
        )
      ) : SrchOption === true ? (
        <div
          style={{ width: '250px', marginRight: '10px', marginBottom: '5px' }}
        >
          <Select placeholder={'검색어'} />
        </div>
      ) : (
        <></>
      )}
    </SectionContainer>
  );
};

export default OptionList;
