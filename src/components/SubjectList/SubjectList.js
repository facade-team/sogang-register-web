import react from 'react';

//styled
import {
  SubejctList,
  Subject,
  SubjectNameInList,
  Detail,
  P,
  Divider,
} from './SubjectList.element';
import { Tag, TagContainer } from '../Card/Card.element';

const SubjectListComp = ({
  latestAndFavoritesToggle,
  latestList,
  favoriteList,
}) => {
  return (
    <SubejctList>
      {latestAndFavoritesToggle
        ? latestList.map((sub, index) => (
            <>
              <Subject key={sub.subject_id}>
                <SubjectNameInList font={14}>{sub.과목명}</SubjectNameInList>
                <TagContainer>
                  {sub.비대면여부 && <Tag untact>비대면</Tag>}
                  {!sub.비대면여부 && <Tag ontact>대면</Tag>}
                  {sub.영어강의 && <Tag eng>영어강의</Tag>}
                  {sub.중국어강의 && <Tag china>중국어강의</Tag>}
                </TagContainer>
                <Detail>
                  <P text={sub.교수진}>{sub.교수진}</P>
                  <P>{sub.수업시간_강의실}</P>
                </Detail>
              </Subject>
              {index !== latestList.length - 1 && <Divider></Divider>}
            </>
          ))
        : favoriteList.map((sub, index) => (
            <>
              <Subject key={sub.subject_id}>
                <SubjectNameInList font={14}>{sub.과목명}</SubjectNameInList>
                <TagContainer>
                  {sub.비대면여부 && <Tag untact>비대면</Tag>}
                  {!sub.비대면여부 && <Tag ontact>대면</Tag>}
                  {sub.영어강의 && <Tag eng>영어강의</Tag>}
                  {sub.중국어강의 && <Tag china>중국어강의</Tag>}
                </TagContainer>
                <Detail>
                  <P text={sub.교수진}>{sub.교수진}</P>
                  <P>{sub.수업시간_강의실}</P>
                </Detail>
              </Subject>
              {index !== favoriteList.length - 1 && <Divider></Divider>}
            </>
          ))}
    </SubejctList>
  );
};

export default SubjectListComp;
