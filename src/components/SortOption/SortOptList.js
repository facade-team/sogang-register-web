import React, { useEffect } from 'react';
import { useSubjectContext } from '../../contexts/SubjectContext';

import {
  SectionContainer,
  OptionContainer,
  OptBtn,
} from '../SearchOption/SearchOptList.element';

import { useSnackBarContext } from '../../contexts/SnackBarContext';

const SortOptList = () => {
  const {
    isSearchOption,
    profOption,
    setProfOption,
    langOption,
    setLangOption,
    contactOption,
    setContactOption,
    profArr,
  } = useSubjectContext();

  const { setSnackBar } = useSnackBarContext();

  // 버튼 토글
  const handleBtnClick = (e) => {
    // 기존 검색결과가 있을때만 정렬옵션 실행
    if (isSearchOption) {
      // 교수 필터옵션은 40명까지만 가능
      if (e.target.name === 'prof') {
        if (profArr.length > 60) {
          setSnackBar({
            type: 'error',
            msg: '한 번에 최대 60명의 교수님만 지원합니다. 검색옵션을 통해 과목을 줄여주세요',
          });
        } else {
          setProfOption(!profOption);
        }
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

  useEffect(() => {
    setProfOption(false);
    setContactOption(false);
    setLangOption(false);
  }, []);

  return (
    <SectionContainer>
      <OptionContainer>
        <OptBtn
          name="prof"
          onClick={(e) => handleBtnClick(e)}
          selected={profOption}
          bgColor="#706fd3"
        >
          교수
        </OptBtn>
        <OptBtn
          name="lang"
          onClick={(e) => handleBtnClick(e)}
          selected={langOption}
          bgColor="#ea8685"
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
