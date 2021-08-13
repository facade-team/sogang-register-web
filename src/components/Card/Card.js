import React from 'react';
import {
  CardContainer,
  SubjectName,
  TagContainer,
  Tag,
  Detail,
  P,
} from './Card.element';

const Card = ({ subject, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <SubjectName text={subject.과목명}>{subject.과목명}</SubjectName>
      <TagContainer>
        {subject.대면여부 === '비대면' ? <Tag untact>비대면</Tag> : null}
        {subject.대면여부 === '대면' ? <Tag ontact>대면</Tag> : null}

        <Tag credit={subject.학점}>{subject.학점}학점</Tag>
        {subject.강의언어 === '영어' ? <Tag eng>영어강의</Tag> : null}
        {subject.강의언어 === '중국어' ? <Tag china>중국어강의</Tag> : null}
      </TagContainer>
      <Detail>
        <P text={subject.교수진}>{subject.교수진}</P>
        {subject.요일1 === subject.요일2 ? (
          <p>
            {subject.요일1} {subject.시간1}
          </p>
        ) : null}
        {subject.요일1 !== subject.요일2 ? (
          <>
            {subject.시간1 === subject.시간2 ? (
              <p>
                {subject.요일1},{subject.요일2} {subject.시간1}
              </p>
            ) : (
              <p>
                {subject.요일1} {subject.시간1} ,{subject.요일2} {subject.시간2}
              </p>
            )}
          </>
        ) : null}
      </Detail>
    </CardContainer>
  );
};

export default Card;
