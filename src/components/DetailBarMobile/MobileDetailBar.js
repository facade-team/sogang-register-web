import { useState, useEffect } from 'react';
import axios from 'axios';

import Subject from '../SubjectCard/SubjectCard';
import StarBtn from '../DetailBar/StarBtn';

import {
  DetailbarComponent,
  Top,
  SubjectName,
  BtnContainer,
  DetailContainer,
  DetailbarContent,
} from './MobileDetailBar.element';

import { Tag, TagContainer } from '../Card/Card.element';

const MobileDetailBar = ({ height, subject, clickCard }) => {
  return (
    <>
      <DetailbarComponent heightPx={height}>
        <DetailbarContent>
          {JSON.stringify(subject) === '{}' ? null : (
            <>
              <Top>
                <SubjectName font={20}>{subject.과목명}</SubjectName>
                <BtnContainer>
                  <StarBtn size={22}></StarBtn>
                </BtnContainer>
              </Top>
              <TagContainer>
                {subject.대면여부 ? (
                  <Tag untact fontSize="12">
                    비대면
                  </Tag>
                ) : (
                  <Tag ontact fontSize="12">
                    대면
                  </Tag>
                )}
                <Tag fontSize="12" credit={subject.학점}>
                  {subject.학점}학점
                </Tag>
                {subject.강의언어 === '영어' ? (
                  <Tag eng fontSize="12">
                    영어강의
                  </Tag>
                ) : null}
                {subject.강의언어 === '중국어' ? (
                  <Tag china fontSize="12">
                    중국어강의
                  </Tag>
                ) : null}
              </TagContainer>
            </>
          )}
        </DetailbarContent>
      </DetailbarComponent>
    </>
  );
};

export default MobileDetailBar;
