import React, { useState, useEffect } from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Card from '../Card/Card';
import {
  Container,
  CardList,
  ImgContainer,
  FilterType,
} from './SelectSubject.element';

import { IoIosClose } from 'react-icons/io';

import { Tag2, TagContainer2 } from '../SearchOption/SearchOptList.element';

import { useSubjectContext } from '../../contexts/SubjectContext';

import searchImg from '../../assets/img/32.png';

import hangulFirstCompare from '../../utils/hangulFirstCompare';

const SelectSubject = ({ number, subtitle, data, onClickCard }) => {
  const {
    isSearchOption,
    profOption,
    langOption,
    contactOption,
    profArr,
    setProfArr,
  } = useSubjectContext();

  const [excludeFilter, setExcludeFilter] = useState({
    prof: [],
    lang: [],
    contact: [],
  });

  const handleFilterClick = (e) => {
    const clickedFilter = e.target.innerText;
    const filterType = e.target.id;

    // 클릭한 필터가 제외필터에 있는 상태였으면, 제외필터에서 없애줌
    // 없으면, 제외필터에 추가

    // 강의언어
    if (filterType === '강의언어') {
      if (excludeFilter.lang.includes(clickedFilter)) {
        const temp = excludeFilter.lang;
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === clickedFilter) {
            temp.splice(i, 1);
            i--;
          }
        }
        setExcludeFilter({ ...excludeFilter, lang: temp });
      }
      // 추가
      else {
        const temp = excludeFilter.lang;
        temp.push(clickedFilter);
        setExcludeFilter({
          ...excludeFilter,
          lang: temp,
        });
      }
    }

    // 대면여부
    // 제거
    if (filterType === '대면여부') {
      if (excludeFilter.contact.includes(clickedFilter)) {
        const temp = excludeFilter.contact;
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === clickedFilter) {
            temp.splice(i, 1);
            i--;
          }
        }
        setExcludeFilter({ ...excludeFilter, contact: temp });
      }
      // 추가
      else {
        const temp = excludeFilter.contact;
        temp.push(clickedFilter);
        setExcludeFilter({
          ...excludeFilter,
          contact: temp,
        });
      }
    }

    // 교수
    // 제거
    if (filterType === '교수') {
      if (excludeFilter.prof.includes(clickedFilter)) {
        const temp = [...excludeFilter.prof];
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === clickedFilter) {
            temp.splice(i, 1);
            i--;
          }
        }
        setExcludeFilter({ ...excludeFilter, prof: temp });
      }
      // 추가
      else {
        const temp = excludeFilter.prof;
        temp.push(clickedFilter);
        setExcludeFilter({
          ...excludeFilter,
          prof: temp,
        });
      }
    }
  };

  const filterAllOn = (e) => {
    const filterType = e.target.id;

    // 제외된 필터에서 싹 다 삭제
    if (filterType === '교수') {
      setExcludeFilter({ ...excludeFilter, prof: [] });
    } else if (filterType === '강의언어') {
      setExcludeFilter({ ...excludeFilter, lang: [] });
    } else if (filterType === '대면여부') {
      setExcludeFilter({ ...excludeFilter, contact: [] });
    }
  };

  const filterAllOff = (e) => {
    const filterType = e.target.id;

    // 제외된 필터에 싹 다 추가
    if (filterType === '교수') {
      setExcludeFilter({ ...excludeFilter, prof: profArr });
    } else if (filterType === '강의언어') {
      setExcludeFilter({
        ...excludeFilter,
        lang: ['한국어', '영어', '중국어'],
      });
    } else if (filterType === '대면여부') {
      setExcludeFilter({ ...excludeFilter, contact: ['대면', '비대면'] });
    }
  };

  const filtering = (subject) => {
    // 제외필터에 해당하면 false 로 필터링
    if (excludeFilter.contact.includes(subject.대면여부)) {
      return false;
    }
    if (excludeFilter.lang.includes(subject.강의언어)) {
      return false;
    }
    if (excludeFilter.prof.includes(subject.교수진)) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (!profOption) {
      setExcludeFilter({ ...excludeFilter, prof: [] });
    }
  }, [profOption]);
  useEffect(() => {
    if (!langOption) {
      setExcludeFilter({ ...excludeFilter, lang: [] });
    }
  }, [langOption]);
  useEffect(() => {
    if (!contactOption) {
      setExcludeFilter({ ...excludeFilter, contact: [] });
    }
  }, [contactOption]);

  useEffect(() => {
    const profObj = new Set(data.map((subject) => subject.교수진));
    const tempArr = [...profObj];
    const sortedProfArr = tempArr.sort(hangulFirstCompare);
    setProfArr(sortedProfArr);
  }, [data]);

  return (
    <>
      {console.log('제외된 필터', excludeFilter)}
      {console.log('교수배열', profArr)}
      <SubTitle number={number} subtitle={subtitle}></SubTitle>

      {data && data.length !== 0 ? (
        <Container>
          <span style={{ fontSize: '13px', margin: '15px' }}>
            **10/4까지 모든 수업 전면 비대면 전환되었습니다.**
          </span>
          {/* 정렬옵션 없을때 */}
          {data && !profOption && !contactOption && !langOption && (
            <CardList>
              {data.map((subject) => (
                <Card
                  key={subject.subject_id}
                  subject={subject}
                  onClick={() => onClickCard(subject.subject_id)}
                ></Card>
              ))}
            </CardList>
          )}

          {/*교수 필터옵션 렌더링*/}
          {profOption && (
            <TagContainer2>
              <FilterType color="#706fd3">교수명</FilterType>
              {excludeFilter.prof.length > 0 ? (
                <Tag2
                  id="교수"
                  fontSize="13"
                  bgColor="#706fd3"
                  onClick={filterAllOn}
                >
                  전체선택
                </Tag2>
              ) : (
                <Tag2 id="교수" fontSize="13" deactive>
                  전체선택
                </Tag2>
              )}

              {excludeFilter.prof.length < profArr.length ? (
                <Tag2
                  id="교수"
                  fontSize="13"
                  bgColor="#706fd3"
                  onClick={filterAllOff}
                >
                  전체해제
                </Tag2>
              ) : (
                <Tag2 id="교수" fontSize="13" deactive>
                  전체해제
                </Tag2>
              )}

              {profArr.map((prof) => (
                <>
                  {prof.length !== 1 && (
                    <Tag2
                      id="교수"
                      fontSize="13"
                      bgColor="#706fd3"
                      onClick={handleFilterClick}
                      deactive={excludeFilter.prof.includes(prof)}
                    >
                      {prof}
                    </Tag2>
                  )}
                </>
              ))}
            </TagContainer2>
          )}

          {/*강의언어 필터옵션 렌더링*/}
          {langOption && (
            <TagContainer2>
              <FilterType color="#ea8685">강의언어</FilterType>
              {excludeFilter.lang.length > 0 ? (
                <Tag2
                  id="강의언어"
                  fontSize="13"
                  bgColor="#ea8685"
                  onClick={filterAllOn}
                >
                  전체선택
                </Tag2>
              ) : (
                <Tag2 id="강의언어" fontSize="13" deactive>
                  전체선택
                </Tag2>
              )}

              {excludeFilter.lang.length < 3 ? (
                <Tag2
                  id="강의언어"
                  fontSize="13"
                  bgColor="#ea8685"
                  onClick={filterAllOff}
                >
                  전체해제
                </Tag2>
              ) : (
                <Tag2 id="강의언어" fontSize="13" deactive>
                  전체해제
                </Tag2>
              )}

              <Tag2
                id="강의언어"
                fontSize="13"
                bgColor="#ea8685"
                onClick={handleFilterClick}
                deactive={excludeFilter.lang.includes('한국어')}
              >
                한국어
              </Tag2>
              <Tag2
                id="강의언어"
                fontSize="13"
                bgColor="#ea8685"
                onClick={handleFilterClick}
                deactive={excludeFilter.lang.includes('영어')}
              >
                영어
              </Tag2>
              <Tag2
                id="강의언어"
                fontSize="13"
                bgColor="#ea8685"
                onClick={handleFilterClick}
                deactive={excludeFilter.lang.includes('중국어')}
              >
                중국어
              </Tag2>
            </TagContainer2>
          )}
          {/*대면여부 필터옵션 렌더링*/}
          {contactOption && (
            <TagContainer2>
              <FilterType color="#01a3a4">대면여부</FilterType>
              {excludeFilter.contact.length > 0 ? (
                <Tag2
                  id="대면여부"
                  fontSize="13"
                  bgColor="#01a3a4"
                  onClick={filterAllOn}
                >
                  전체선택
                </Tag2>
              ) : (
                <Tag2 id="대면여부" fontSize="13" deactive>
                  전체선택
                </Tag2>
              )}

              {excludeFilter.contact.length < 2 ? (
                <Tag2
                  id="대면여부"
                  fontSize="13"
                  bgColor="#01a3a4"
                  onClick={filterAllOff}
                >
                  전체해제
                </Tag2>
              ) : (
                <Tag2 id="대면여부" fontSize="13" deactive>
                  전체해제
                </Tag2>
              )}

              <Tag2
                id="대면여부"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={excludeFilter.contact.includes('대면')}
              >
                대면
              </Tag2>
              <Tag2
                id="대면여부"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={excludeFilter.contact.includes('비대면')}
              >
                비대면
              </Tag2>
            </TagContainer2>
          )}

          {(contactOption || langOption || profOption) && (
            <CardList>
              {data.filter(filtering).map((subject) => (
                <Card
                  key={subject.subject_id}
                  subject={subject}
                  onClick={() => onClickCard(subject.subject_id)}
                ></Card>
              ))}
            </CardList>
          )}
        </Container>
      ) : null}
      {/* 초기상태 */}
      {!data || !isSearchOption ? (
        <ImgContainer>
          <img src={searchImg} alt="search" width="400px"></img>
        </ImgContainer>
      ) : null}
      {/* {!data ? (
        
      ) : null} */}
    </>
  );
};

export default SelectSubject;
