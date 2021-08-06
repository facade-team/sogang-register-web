import React, { useState } from 'react';

import GradationBtn from '../GradationBtn/GradationBtn';
import Subject from '../SubjectCard/SubjectCard';

import { data } from '../../pages/DummyData';

//styled
import {
  Container,
  OptionBtnContainer,
  StackContent,
  SubjectList,
  Divider,
} from './SubjectList.element.js';

const SubjectListComp = () => {
  const [latestList, setLatestList] = useState(data);
  const [favoriteList, setFavoriteList] = useState(data);
  const [completedList, setCompletedList] = useState(data);

  return (
    <Container>
      {/* 최근 본 과목 */}
      <StackContent>
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

      {/* 수강한 과목 */}
      <StackContent>
        <OptionBtnContainer>
          <GradationBtn
            width={120}
            borderRadius={20}
            active={true}
            mouseover={false}
          >
            수강한 과목
          </GradationBtn>
        </OptionBtnContainer>
        <SubjectList>
          {completedList.map((sub, index) => (
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
