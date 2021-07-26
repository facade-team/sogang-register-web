import React from 'react';
import { HomeContainer } from '../styles/HomeContainer';
import Title from '../components/Title/Title';
import SearchOption from '../components/SearchOption/SearchOption';
import SelectSubject from '../components/SelectSubject/SelectSubject';

const Home = () => {
  return (
    <HomeContainer>
      <Title title="개설교과목 검색"></Title>
      <SearchOption
        number="01"
        subtitle="검색옵션"
        submessage="*복수선택 가능"
      ></SearchOption>
      {/* <DetailOption number="02" subtitle="세부옵션"></DetailOption> */}
      <SelectSubject number="03" subtitle="과목선택"></SelectSubject>
    </HomeContainer>
  );
};

export default Home;
