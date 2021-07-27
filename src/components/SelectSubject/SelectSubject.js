import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Card from '../Card/Card';
import { CardList } from './SelectSubject.element';

const SelectSubject = ({ number, subtitle, data, onClickCard }) => {
  return (
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
  );
};

export default SelectSubject;
