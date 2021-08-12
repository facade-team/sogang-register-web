import React, { useState, useEffect } from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Card from '../Card/Card';
import {
  CardList,
  ImgContainer,
  SortedSubjectContainer,
  SortedCard,
  ProfName,
  Divider,
} from './SelectSubject.element';

import { useSubjectContext } from '../../contexts/SubjectContext';

import searchImg from '../../assets/img/32.png';

const SelectSubject = ({ number, subtitle, data, onClickCard }) => {
  const {
    isSearchOption,
    subjectsByProf,
    profOption,
    langOption,
    contactOption,
  } = useSubjectContext();

  return (
    <>
      <SubTitle number={number} subtitle={subtitle}></SubTitle>
      {data && data.length !== 0 ? (
        <>
          {console.log('23', data)}
          <CardList>
            {/* 정렬옵션 없을때 */}
            {data &&
              !profOption &&
              !contactOption &&
              !langOption &&
              data.map((subject) => (
                <Card
                  key={subject.subject_id}
                  subject={subject}
                  onClick={() => onClickCard(subject.subject_id)}
                ></Card>
              ))}

            {/* 교수 정렬옵션 */}
            {isSearchOption &&
              subjectsByProf &&
              profOption &&
              subjectsByProf.map((subjectWithProf) => (
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

            {/*강의언어 정렬옵션 렌더링*/}
            {isSearchOption && langOption}
            {/*대면여부 정렬옵션 렌더링*/}
            {isSearchOption &&
              contactOption &&
              data.map((subject) => {
                return subject.대면여부 === '대면' ? (
                  <Card
                    key={subject.subject_id}
                    subject={subject}
                    onClick={() => onClickCard(subject.subject_id)}
                  ></Card>
                ) : null;
              })}
          </CardList>
        </>
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
