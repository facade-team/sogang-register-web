import React, { useState, useEffect } from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Card from '../Card/Card';
import {
  Container,
  CardList,
  ImgContainer,
  SortedSubjectContainer,
  SortedCard,
  ProfName,
  Divider,
} from './SelectSubject.element';

import { IoIosClose } from 'react-icons/io';

import { Tag2, TagContainer2 } from '../SearchOption/SearchOptList.element';

import { useSubjectContext } from '../../contexts/SubjectContext';

import searchImg from '../../assets/img/32.png';

const SelectSubject = ({ number, subtitle, data, onClickCard }) => {
  const {
    isSearchOption,
    subjectsByProf,
    profOption,
    langOption,
    contactOption,
    ontact,
    setOntact,
    untact,
    setUntact,
    kor,
    setKor,
    eng,
    setEng,
    china,
    setChina,
  } = useSubjectContext();

  const [excludeFilter, setExcludeFilter] = useState({
    prof: [],
    lang: [],
    contact: [],
  });

  const handleFilterClick = (e) => {
    const clickedFilter = e.target.id;
    console.log('e.target', e.target.innerText);

    // 클릭한 필터가 제외필터에 있는 상태였으면, 제외필터에서 없애줌
    // 없으면, 제외필터에 추가

    // 강의언어
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

    // 대면여부
    // 제거
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
  };

  const filtering = (subject) => {
    // 제외필터에 해당하면 false 로 필터링
    if (excludeFilter.contact.includes(subject.강의언어)) {
      return false;
    }
    if (excludeFilter.lang.includes(subject.대면여부)) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (!profOption) {
      setExcludeFilter({ ...excludeFilter, prof: [] });
    }
    if (!langOption) {
      setExcludeFilter({ ...excludeFilter, lang: [] });
    }
    if (!contactOption) {
      setExcludeFilter({ ...excludeFilter, contact: [] });
    }
  }, [profOption, langOption, contactOption]);

  return (
    <>
      {console.log('23', excludeFilter)}
      <SubTitle number={number} subtitle={subtitle}></SubTitle>
      {data && data.length !== 0 ? (
        <Container>
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

          {/* 교수 정렬옵션 */}
          {isSearchOption && subjectsByProf && profOption && (
            <CardList>
              {subjectsByProf.map((subjectWithProf) => (
                <>
                  <SortedSubjectContainer>
                    <ProfName>{Object.keys(subjectWithProf)}</ProfName>
                    <SortedCard>
                      {Object.values(subjectWithProf).map((subjectArr) =>
                        subjectArr.map((subject) => (
                          <Card
                            key={subject.subject_id}
                            subject={subject}
                            onClick={() => onClickCard(subject.subject_id)}
                          ></Card>
                        ))
                      )}
                    </SortedCard>
                  </SortedSubjectContainer>
                  <Divider></Divider>
                </>
              ))}
            </CardList>
          )}

          {/*강의언어 정렬옵션 렌더링*/}
          {langOption && (
            <TagContainer2>
              <Tag2
                id="한국어"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={excludeFilter.lang.includes('한국어')}
              >
                한국어
              </Tag2>
              <Tag2
                id="영어"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={excludeFilter.lang.includes('영어')}
              >
                영어
              </Tag2>
              <Tag2
                id="중국어"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={excludeFilter.lang.includes('중국어')}
              >
                중국어
              </Tag2>
            </TagContainer2>
          )}
          {/*대면여부 정렬옵션 렌더링*/}
          {contactOption && (
            <TagContainer2>
              <Tag2
                id="대면"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={excludeFilter.contact.includes('대면')}
              >
                대면
              </Tag2>
              <Tag2
                id="비대면"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={excludeFilter.contact.includes('비대면')}
              >
                비대면
              </Tag2>
            </TagContainer2>
          )}

          {(contactOption || langOption) && (
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
    </>
  );
};

export default SelectSubject;
