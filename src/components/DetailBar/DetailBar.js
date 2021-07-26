import react from 'react';

//components
import GradationBtn from '../GradationBtn/GradationBtn';
import { Tag, TagContainer } from '../Card/Card.element';

//styled
import {
  DetailbarComponent,
  DetailbarContent,
  StackContent,
  DetailContainer,
  SubjectName,
  SubjectTable,
  TableBody,
  TableRow,
  TableHead,
  TableData,
} from './DetailBar.element';

const DetailBar = ({ width, openModal, subject }) => {
  return (
    <DetailbarComponent widthPx={width}>
      <DetailContainer>
        <GradationBtn
          width={280}
          onClick={openModal}
          signBtnType={'login'}
          borderRadius={10}
          top={40}
        >
          로그인/회원가입
        </GradationBtn>
        <DetailbarContent>
          <SubjectName>{subject.과목명}</SubjectName>
          <TagContainer>
            {subject.비대면여부 ? (
              <Tag untact>비대면</Tag>
            ) : (
              <Tag ontact>대면</Tag>
            )}
            {subject.영어강의 && <Tag eng>영어강의</Tag>}
            {subject.중국어강의 && <Tag china>중국어강의</Tag>}
          </TagContainer>
          <SubjectTable>
            <TableBody>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  학과
                </TableHead>
                <TableData corner={false}>경영학과</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  과목번호
                </TableHead>
                <TableData corner={false}>{subject.subject_id}</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  강의계획서
                </TableHead>
                <TableData corner={false}>조회하기 클릭</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  학점
                </TableHead>
                <TableData corner={false}>{subject.학점}</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  강의시간
                </TableHead>
                <TableData corner={false}>{subject.수업시간_강의실}</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  교수
                </TableHead>
                <TableData corner={false}>{subject.교수진}</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  수강대상
                </TableHead>
                <TableData corner={false}>전학년</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  권장학년
                </TableHead>
                <TableData corner={false}>{subject.권장학년}</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={true}>
                  수간신청 참조사항
                </TableHead>
                <TableData corner={true}>{subject.비고}</TableData>
              </TableRow>
            </TableBody>
          </SubjectTable>
        </DetailbarContent>
        <StackContent></StackContent>
      </DetailContainer>
    </DetailbarComponent>
  );
};

export default DetailBar;
