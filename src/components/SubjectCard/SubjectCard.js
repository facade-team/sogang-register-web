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
        {subject.대면여부 === '비대면' ? (
          <Tag untact>비대면</Tag>
        ) : (
          <Tag ontact>대면</Tag>
        )}
        {subject.강의언어 === '영어' ? <Tag eng>영어강의</Tag> : null}
        {subject.강의언어 === '중국어' ? <Tag china>중국어강의</Tag> : null}
        <Tag credit={subject.학점}>{subject.학점}학점</Tag>
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
    </Subject>
  );
};

export default SubjectCard;
