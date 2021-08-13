//styled
import { useState } from 'react';
import {
  Subject,
  SubjectNameInList,
  Detail,
  P,
  CloseBtn,
} from './SubjectCard.element.js';
import { Tag, TagContainer } from '../Card/Card.element';

const SubjectCard = ({ subject, onClick, active, onDelete, latest }) => {
  const [hoverCard, setHoverCard] = useState(false);
  return (
    <Subject
      onClick={() => (active ? onClick(subject.subject_id) : null)}
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
    >
      <SubjectNameInList font={14}>{subject.과목명}</SubjectNameInList>
      <TagContainer>
        {subject.대면여부 ? <Tag untact>비대면</Tag> : <Tag ontact>대면</Tag>}
        {subject.강의언어 === '영어' ? <Tag eng>영어강의</Tag> : null}
        {subject.강의언어 === '중국어' ? <Tag china>중국어강의</Tag> : null}
        <Tag credit={subject.학점}>{subject.학점}학점</Tag>
      </TagContainer>
      <Detail>
        <P text={subject.교수진}>{subject.교수진}</P>
        <P>{subject.수업시간_강의실}</P>
        <p>
          {subject.요일} {subject.시작시간}~{subject.종료시간}
        </p>
      </Detail>
      {hoverCard ? (
        <CloseBtn
          onClick={() => onDelete(subject.subject_id, latest)}
        ></CloseBtn>
      ) : null}
    </Subject>
  );
};

export default SubjectCard;
