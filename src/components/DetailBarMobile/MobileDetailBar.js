import { useState, useEffect } from 'react';
import axios from 'axios';

import Subject from '../SubjectCard/SubjectCard';
import StarBtn from '../DetailBar/StarBtn';
import CloseIcon from '@material-ui/icons/Close';

import {
  DetailbarComponent,
  Top,
  SubjectName,
  BtnContainer,
  DetailbarContent,
  TableRow,
  TableHead,
  TableBody,
  TableData,
  SubjectTable,
  TagContainer,
} from './MobileDetailBar.element';

import { useSnackBarContext } from '../../contexts/SnackBarContext';

import { Tag } from '../Card/Card.element';

const MobileDetailBar = ({ height, subject, clickCard }) => {
  const { setSnackBar } = useSnackBarContext();
  const handleClick = () => {
    setSnackBar({
      type: 'error',
      msg: '추후 업데이트 예정입니다!',
    });
  };
  return (
    <>
      <DetailbarComponent heightPx={height}>
        <DetailbarContent>
          {JSON.stringify(subject) === '{}' ? null : (
            <>
              <Top>
                <span style={{ display: 'flex' }}>
                  <SubjectName text={subject.과목명} font={20}>
                    {subject.과목명}
                  </SubjectName>
                  <BtnContainer>
                    <StarBtn size={22}></StarBtn>
                  </BtnContainer>
                </span>
                {/* <CloseIcon className="modal-close" onClick={onClose} /> */}
              </Top>
              <TagContainer>
                {subject.대면여부 ? (
                  <Tag untact fontSize="12">
                    비대면
                  </Tag>
                ) : (
                  <Tag ontact fontSize="12">
                    대면
                  </Tag>
                )}
                <Tag fontSize="12" credit={subject.학점}>
                  {subject.학점}학점
                </Tag>
                {subject.강의언어 === '영어' ? (
                  <Tag eng fontSize="12">
                    영어강의
                  </Tag>
                ) : null}
                {subject.강의언어 === '중국어' ? (
                  <Tag china fontSize="12">
                    중국어강의
                  </Tag>
                ) : null}
              </TagContainer>
              <SubjectTable>
                <TableBody>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      전공/영역
                    </TableHead>
                    <TableData corner={false}>{subject.학과}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      과목번호
                    </TableHead>
                    <TableData corner={false}>
                      {subject.subject_id.substring(5)}
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      강의계획서
                    </TableHead>
                    <TableData corner={false}>
                      <Tag
                        bgColor="#95a5a6"
                        onClick={handleClick}
                        style={{ cursor: 'pointer' }}
                      >
                        조회하기
                      </Tag>
                    </TableData>
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
                    <TableData corner={false}>
                      {subject.요일} {subject.시작시간}~{subject.종료시간}
                    </TableData>
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
                    <TableData corner={false}>{subject.수강대상}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={true}>
                      비고
                    </TableHead>
                    <TableData corner={true}>
                      {subject.비고 ? subject.비고 : '없음'}
                    </TableData>
                  </TableRow>
                </TableBody>
              </SubjectTable>
            </>
          )}
        </DetailbarContent>
      </DetailbarComponent>
    </>
  );
};

export default MobileDetailBar;
