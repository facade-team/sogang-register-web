import React, { useState, useEffect } from 'react';
import { useSubjectContext } from '../../contexts/SubjectContext';

import {
  SectionContainer,
  OptionContainer,
  OptBtn,
} from '../SearchOption/SearchOptList.element';

import hangulFirstCompare from '../../utils/hangulFirstCompare';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

const SortOptList = () => {
  const [saveSubjects, setSaveSubjects] = useState(false);

  const {
    subjects,
    setSubjects,
    isSearchOption,
    setSubjectsByProf,
    profOption,
    setProfOption,
    langOption,
    setLangOption,
    contactOption,
    setContactOption,
  } = useSubjectContext();

  const { setSnackBar } = useSnackBarContext();

  // 버튼 토글
  const handleBtnClick = (e) => {
    // 기존 검색결과가 있을때만 정렬옵션 실행
    if (isSearchOption) {
      if (e.target.name === 'prof') {
        setProfOption(!profOption);
      } else if (e.target.name === 'lang') {
        setLangOption(!langOption);
      } else if (e.target.name === 'contact') {
        setContactOption(!contactOption);
      }
    } else {
      setSnackBar({
        type: 'error',
        msg: '조회된 과목이 없습니다.',
      });
    }
  };

  // 교수 정렬
  useEffect(() => {
    // 검색옵션이 설정돼있을 때만, 정렬 실행
    if (isSearchOption) {
      setSaveSubjects(subjects);
      if (profOption) {
        const profObj = new Set(subjects.map((subject) => subject.교수진)); // 교수리스트 set object
        const profArr = [...profObj];
        const SortedProfArr = profArr.sort(hangulFirstCompare); // 한글->영어 순으로 정렬된 교수 리스트
        // console.log(SortedProfArr); // ['강기봉', '강문성' ...]

        const resultArr = [];
        SortedProfArr.forEach((prof) => resultArr.push({ [prof]: [] }));
        console.log(resultArr);
        subjects.forEach((subject) => {
          const profIdx = SortedProfArr.indexOf(subject.교수진);
          resultArr[profIdx][subject.교수진].push(subject);
        });
        // console.log('res', resultArr);
        /* resultArr : [ 
          {"강기봉" : [{과목1},{과목2}]}, 
          {"강문성" : [{과목1},{과목2}..]},
          ...
        ]
  
        */

        const destructedArr = [];
        resultArr.forEach((obj) => {
          const list = Object.values(obj);
          destructedArr.push(...list[0]);
        });

        //setSubjects(destructedArr);
        setSubjectsByProf(resultArr);
      } else {
        // setSubjects(saveSubjects);
      }
    } else {
      setSubjects([]);
    }
  }, [profOption, isSearchOption]);

  // 대면 여부로 정렬
  useEffect(() => {
    // 검색옵션이 설정돼있을 때만, 정렬 실행
    if (isSearchOption) {
    } else {
      setSubjects([]);
    }
  }, [contactOption, isSearchOption]);

  return (
    <SectionContainer>
      <OptionContainer>
        <OptBtn
          name="prof"
          onClick={(e) => handleBtnClick(e)}
          selected={profOption}
          bgColor="#01a3a4"
        >
          교수
        </OptBtn>
        <OptBtn
          name="lang"
          onClick={(e) => handleBtnClick(e)}
          selected={langOption}
          bgColor="#01a3a4"
        >
          강의언어
        </OptBtn>
        <OptBtn
          name="contact"
          onClick={(e) => handleBtnClick(e)}
          selected={contactOption}
          bgColor="#01a3a4"
        >
          대면여부
        </OptBtn>
      </OptionContainer>
    </SectionContainer>
  );
};

export default SortOptList;
