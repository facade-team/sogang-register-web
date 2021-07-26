import React from 'react';
import {
  CardContainer,
  SubjectName,
  TagContainer,
  Tag,
  Detail,
} from './Card.element';

const Card = ({ subject }) => {
  return (
    <CardContainer>
      <SubjectName>{subject.과목명}</SubjectName>
      <TagContainer>
        {subject.비대면여부 ? <Tag untact>비대면</Tag> : <Tag ontact>대면</Tag>}
        {subject.영어강의 && <Tag eng>영어강의</Tag>}
        {subject.중국어강의 && <Tag china>중국어강의</Tag>}
      </TagContainer>
      <Detail>
        <p>{subject.교수진} 교수</p>
        <p>{subject.수업시간_강의실}</p>
      </Detail>
    </CardContainer>
  );
};

export default Card;
