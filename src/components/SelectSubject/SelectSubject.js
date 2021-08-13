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

  const handleFilterClick = (e) => {
    console.log(e.target.id);
    if (e.target.id === '대면') {
      setOntact(!ontact);
    } else if (e.target.id === '비대면') {
      setUntact(!untact);
    }
  };

  return (
    <>
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
          {isSearchOption && langOption}
          {/*대면여부 정렬옵션 렌더링*/}
          {isSearchOption && contactOption && (
            <TagContainer2>
              <Tag2
                id="대면"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={!ontact}
              >
                대면
              </Tag2>
              <Tag2
                id="비대면"
                fontSize="13"
                bgColor="#01a3a4"
                onClick={handleFilterClick}
                deactive={!untact}
              >
                비대면
              </Tag2>
            </TagContainer2>
          )}

          {contactOption && ontact && untact && (
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
          {contactOption && ontact && !untact && (
            <CardList>
              {data
                .filter((subject) => subject.대면여부 === '대면')
                .map((ontactSubject) => (
                  <Card
                    key={ontactSubject.subject_id}
                    subject={ontactSubject}
                    onClick={() => onClickCard(ontactSubject.subject_id)}
                  ></Card>
                ))}
            </CardList>
          )}
          {contactOption && !ontact && untact && (
            <CardList>
              {data
                .filter((subject) => subject.대면여부 === '비대면')
                .map((ontactSubject) => (
                  <Card
                    key={ontactSubject.subject_id}
                    subject={ontactSubject}
                    onClick={() => onClickCard(ontactSubject.subject_id)}
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
      )}

      {/* {!data ? (
        
      ) : null} */}
    </>
  );
};

export default SelectSubject;
