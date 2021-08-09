import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Card from '../Card/Card';
import { CardList, ImgContainer } from './SelectSubject.element';

import searchImg from '../../assets/img/32.png';

const SelectSubject = ({ number, subtitle, data, onClickCard }) => {
  return (
    <>
      <SubTitle number={number} subtitle={subtitle}></SubTitle>
      {data.length !== 0 ? (
        <>
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
        // <p style={{ marginTop: '30px' }}>검색옵션을 선택해주세요</p>
        <ImgContainer>
          <img src={searchImg} alt="search" width="400px"></img>
        </ImgContainer>
      )}
    </>
  );
};

export default SelectSubject;
