import React from 'react';
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
  const { isSearchOption, subjectsByProf, profOption } = useSubjectContext();
  return (
    <>
      <SubTitle number={number} subtitle={subtitle}></SubTitle>
      {data ? (
        <>
          <CardList>
            {/* 정렬옵션 없을때 */}
            {data &&
              !profOption &&
              data.map((subject) => (
                <Card
                  key={subject.subject_id}
                  subject={subject}
                  onClick={() => onClickCard(subject.subject_id)}
                ></Card>
              ))}

            {/* 교수 정렬옵션 */}
            {subjectsByProf &&
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
          </CardList>
        </>
      ) : (
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
