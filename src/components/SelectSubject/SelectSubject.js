import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Card from '../Card/Card';
import { data } from '../../pages/DummyData';
import { CardList } from './SelectSubject.element';

const SelectSubject = ({ number, subtitle }) => {
  return (
    <>
      <SubTitle number={number} subtitle={subtitle}></SubTitle>
      <CardList>
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
        {data.map((subject) => (
          <Card subject={subject}></Card>
        ))}
      </CardList>
    </>
  );
};

export default SelectSubject;
