import React from 'react';
import {
  CardTop,
  BtnContainer,
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
      <SubjectName>{subject.과목명}</SubjectName>
      <TagContainer>
        {subject.비대면여부 ? <Tag untact>비대면</Tag> : <Tag ontact>대면</Tag>}
        {subject.영어강의 && <Tag eng>영어강의</Tag>}
        {subject.중국어강의 && <Tag china>중국어강의</Tag>}
      </TagContainer>
      <Detail>
        <P text={subject.교수진}>{subject.교수진}</P>
        <p>{subject.수업시간_강의실}</p>
      </Detail>
    </CardContainer>
  );
};

export default Card;
