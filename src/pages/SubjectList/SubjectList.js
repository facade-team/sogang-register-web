import React, { useState } from 'react';

import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Subject from '../../components/SubjectCard/SubjectCard';

import { data } from '../DummyData';

//styled
import {
  Container,
  OptionBtnContainer,
  StackContent,
  SubjectList,
  Divider,
  TrashBtn,
} from './SubjectList.element.js';

const SubjectListComp = () => {
  const [latestList, setLatestList] = useState(data);
  const [favoriteList, setFavoriteList] = useState(data);

  const clearLatestList = (e) => {
    setLatestList([]);
  };

  const clearFavoriteList = (e) => {
    setFavoriteList([]);
  };

  return (
    <Container>
      {/* 최근 본 과목 */}
      <StackContent>
        <TrashBtn size={20} onClick={clearLatestList}></TrashBtn>
        <OptionBtnContainer>
          <GradationBtn
            width={120}
            borderRadius={20}
            active={true}
            mouseover={false}
          >
            최근 본 과목
          </GradationBtn>
        </OptionBtnContainer>
        <SubjectList>
          {latestList.map((sub, index) => (
            <>
              <Subject
                key={sub.subject_id}
                subject={sub}
                active={false}
              ></Subject>
              {index !== latestList.length - 1 && <Divider></Divider>}
            </>
          ))}
        </SubjectList>
      </StackContent>

      {/* 즐겨찾기 */}
      <StackContent>
        <TrashBtn size={20} onClick={clearFavoriteList}></TrashBtn>
        <OptionBtnContainer>
          <GradationBtn
            width={120}
            borderRadius={20}
            active={true}
            mouseover={false}
          >
            즐겨찾기
          </GradationBtn>
        </OptionBtnContainer>
        <SubjectList>
          {favoriteList.map((sub, index) => (
            <>
              <Subject
                key={sub.subject_id}
                subject={sub}
                active={false}
              ></Subject>
              {index !== latestList.length - 1 && <Divider></Divider>}
            </>
          ))}
        </SubjectList>
      </StackContent>
    </Container>
  );
};

export default SubjectListComp;
