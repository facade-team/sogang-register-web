import react from 'react';

//components
import GradationBtn from '../GradationBtn/GradationBtn';

//styled
import {
  DetailbarComponent,
  DetailbarContent,
  DetailContainer,
  SubjectName,
  SubjectTable,
  TableBody,
  TableRow,
  TableHead,
  TableData,
} from './DetailBar.element';

const DetailBar = ({ width, openModal }) => {
  return (
    <DetailbarComponent widthPx={width}>
      <DetailContainer>
        <GradationBtn
          width={280}
          onClick={openModal}
          signBtnType={'login'}
          borderRadius={10}
        >
          로그인/회원가입
        </GradationBtn>
        <DetailbarContent>
          <SubjectName>마케팅원론</SubjectName>
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
                <TableData corner={false}>MGT3006-01</TableData>
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
                <TableData corner={false}>3.0</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  강의시간
                </TableHead>
                <TableData corner={false}>화목 13:30~14:45</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={false}>
                  교수
                </TableHead>
                <TableData corner={false}>임채운</TableData>
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
                <TableData corner={false}>2~4학년</TableData>
              </TableRow>
              <TableRow>
                <TableHead scope="row" corner={true}>
                  수간신청 참조사항
                </TableHead>
                <TableData corner={true}>
                  경영학부, 스포츠경영 연계전공, 스타트업 연계전공 가능
                </TableData>
              </TableRow>
            </TableBody>
          </SubjectTable>
        </DetailbarContent>
        <DetailbarContent></DetailbarContent>
      </DetailContainer>
    </DetailbarComponent>
  );
};

export default DetailBar;
