import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Card from '../Card/Card';
import { CardList } from './SelectSubject.element';

const SelectSubject = ({ number, subtitle, data, onClickCard }) => {
  return (
    <>
      {data.length !== 0 ? (
        <>
          <SubTitle number={number} subtitle={subtitle}></SubTitle>

          <CardList>
            {data.map((subject) => (
              <Card
                key={subject.subject_id}
                subject={subject}
                onClick={() => onClickCard(subject.subject_id)}
              ></Card>
            ))}
          </CardList>
        </>
      ) : (
        <p style={{ marginTop: '30px' }}>검색옵션을 선택해주세요</p>
      )}
    </>
  );
};

export default SelectSubject;
