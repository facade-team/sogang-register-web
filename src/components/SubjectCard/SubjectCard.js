//styled
import {
  Subject,
  SubjectNameInList,
  Detail,
  P,
} from './SubjectCard.element.js';
import { Tag, TagContainer } from '../Card/Card.element';

const SubjectCard = ({ subject, onClick, active, key }) => {
  return (
    <Subject onClick={() => (active ? onClick(subject.subject_id) : null)}>
      <SubjectNameInList font={14}>{subject.과목명}</SubjectNameInList>
      <TagContainer>
        {subject.대면여부 ? <Tag untact>비대면</Tag> : <Tag ontact>대면</Tag>}
        {subject.강의언어 === '영어' && <Tag eng>영어강의</Tag>}
        {subject.강의언어 === '중국어' && <Tag china>중국어강의</Tag>}
        <Tag credit={subject.학점}>{subject.학점}학점</Tag>
      </TagContainer>
      <Detail>
        <P text={subject.교수진}>{subject.교수진}</P>
        <P>{subject.수업시간_강의실}</P>
      </Detail>
    </Subject>
  );
};

export default SubjectCard;
