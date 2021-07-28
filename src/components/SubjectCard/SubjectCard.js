import react from 'react';

//styled
import {
  Subject,
  SubjectNameInList,
  Detail,
  P,
} from './SubjectCard.element.js';
import { Tag, TagContainer } from '../Card/Card.element';

const SubjectCard = ({ subject, onClick }) => {
  return (
    <Subject onClick={() => onClick(subject.subject_id)}>
      <SubjectNameInList font={14}>{subject.과목명}</SubjectNameInList>
      <TagContainer>
        {subject.비대면여부 && <Tag untact>비대면</Tag>}
        {!subject.비대면여부 && <Tag ontact>대면</Tag>}
        {subject.영어강의 && <Tag eng>영어강의</Tag>}
        {subject.중국어강의 && <Tag china>중국어강의</Tag>}
      </TagContainer>
      <Detail>
        <P text={subject.교수진}>{subject.교수진}</P>
        <P>{subject.수업시간_강의실}</P>
      </Detail>
    </Subject>
  );
};

export default SubjectCard;
