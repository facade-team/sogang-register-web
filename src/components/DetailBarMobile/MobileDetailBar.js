import { useState, useEffect } from 'react';

//API
import { addFavorite, deleteFavorite } from '../../API/Favorite';

import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';
import { useLatestSubjectsContext } from '../../contexts/LatestSubjectsContext';

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

import { Tag } from '../Card/Card.element';

const MobileDetailBar = ({ height, subject, onClose }) => {
  const { isAuth, userData, setUserData } = useAuthContext();
  const { latestSubjects, setLatestSubjects } = useLatestSubjectsContext();
  const { loading, setLoading } = useLoadingContext();
  const { setSnackBar } = useSnackBarContext();
  const { setLoading, loading } = useLoadingContext();
  const [favoriteList, setFavoriteList] = useState(userData.subjects || []);
  const [checkBookmark, setCheckBookmark] = useState(false);

  useEffect(() => {
    if (latestSubjects.length !== 0) {
      const idx = latestSubjects.findIndex((sub) => {
        return subject.subject_id === sub.subject_id;
      });

      let list;
      if (idx === -1) {
        list = [subject, ...latestSubjects];
      } else {
        list = [...latestSubjects];
        list.unshift(list.splice(idx, 1)[0]);
      }

      setLatestSubjects(list);
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      const existInFavoriteList = favoriteList.find(
        (favorite) => favorite.subject_id === subject.subject_id
      );
      existInFavoriteList ? setCheckBookmark(true) : setCheckBookmark(false);
    }
  }, [subject, favoriteList]);

  useEffect(() => {
    if (!latestSubjects) return;
    if (JSON.stringify(subject) === '{}') {
      return;
    }

    const latestListIndex = latestSubjects.findIndex(
      (latest) => latest.subject_id === subject.subject_id
    );

    if (latestListIndex === -1) {
      // 최근 본 과목 리스트에 없을 때
      const list = [subject, ...latestSubjects];

      if (list.length > 10) {
        list.pop();
      }

      setLatestSubjects(list);
    } else if (latestListIndex > 0) {
      // 이미 최근 본 과목 리스트에 있을 때
      const list = [...latestSubjects];

      //latestSubject를 맨 앞으로
      list.unshift(list.splice(latestListIndex, 1)[0]);

      setLatestSubjects(list);
    }
  }, [subject]);

  const toFavorite = () => {
    if (loading) {
      return;
    }
    if (!isAuth) {
      setSnackBar({
        type: 'error',
        msg: '로그인이 필요합니다.',
      });
      return;
    }
    // 즐겨찾기 버튼 눌렀을 때 해당 과목 즐겨찾기 리스트로 이동. 한 번 더 누르면 즐겨찾기 리스트에서 삭제
    const sub = favoriteList.find((favorite) => {
      return favorite.subject_id === subject.subject_id;
    });
    let list = [...favoriteList];

    if (sub === undefined) {
      //추가
      list = favoriteList.concat(subject);

      if (list.length > 10) {
        list.pop();
        setSnackBar({
          type: 'error',
          msg: '즐겨찾기는 10개까지 담을 수 있습니다.',
        });
      }

      setFavoriteList(list);
      addFavorite(subject.subject_id, setLoading, setSnackBar);

      let newUserData = {
        ...userData,
        subjects: list,
      };
      setUserData(newUserData);
      localStorage.setItem('userData', JSON.stringify(newUserData));
    } else {
      //삭제
      const idx = favoriteList.indexOf(sub);
      if (idx > -1) list.splice(idx, 1);
      setFavoriteList(list);
      deleteFavorite(subject.subject_id, setLoading, setSnackBar);

      let newUserData = { ...userData };
      if (newUserData.subjects !== undefined) {
        let currentFavorite = [...userData.subjects];
        currentFavorite = currentFavorite.filter(
          (s) => s.subject_id !== subject.subject_id
        );

        if (currentFavorite.length !== 0) {
          newUserData.subjects = currentFavorite;
          setUserData(newUserData);
          localStorage.setItem('userData', JSON.stringify(newUserData));
        } else {
          delete newUserData.subjects;
          setUserData(newUserData);
          localStorage.setItem('userData', JSON.stringify(newUserData));
        }
      }
    }
  };

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
                    {subject.과목명}{' '}
                    {subject.subject_id.substring(13, 14) === '0' ? ( // 01?
                      <span style={{ fontSize: '13px' }}>
                        [{subject.subject_id.substring(14, 15)}반]
                      </span>
                    ) : (
                      // 10?
                      <span style={{ fontSize: '13px' }}>
                        [{subject.subject_id.substring(13, 15)}반]
                      </span>
                    )}
                  </SubjectName>
                  <BtnContainer>
                    <StarBtn
                      size={22}
                      checkBookmark={checkBookmark}
                      onClick={toFavorite}
                    ></StarBtn>
                  </BtnContainer>
                </span>
                <CloseIcon className="modal-close" onClick={onClose} />
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
                              {subject.요일1} {subject.시간1} ,{subject.요일2}{' '}
                              {subject.시간2}
                            </p>
                          )}
                        </>
                      ) : null}
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
