import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { useAuthContext } from '../../contexts/AuthContext';
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

const MobileDetailBar = ({ height, subject, onClose }) => {
  const value = useRef({});
  const { isAuth, userData, setUserData } = useAuthContext();
  const { setSnackBar } = useSnackBarContext();
  const [latestAndFavoritesToggle, setLatestAndFavoritesToggle] =
    useState(true);
  const [latestList, setLatestList] = useState([subject]);
  const [favoriteList, setFavoriteList] = useState(userData.subjects || []);
  const [checkBookmark, setCheckBookmark] = useState(false);

  useEffect(() => {
    if (isAuth) {
      const existInFavoriteList = favoriteList.find(
        (favorite) => favorite.subject_id === subject.subject_id
      );
      existInFavoriteList ? setCheckBookmark(true) : setCheckBookmark(false);
    }
  }, [subject, favoriteList]);

  useEffect(() => {
    if (!latestList || latestList.length === 0) return;
    if (JSON.stringify(subject) === '{}') {
      return;
    }

    const latestListIndex = latestList.findIndex(
      (latest) => latest.subject_id === subject.subject_id
    );

    if (latestListIndex === -1) {
      // 최근 본 과목 리스트에 없을 때
      const list = [...latestList, subject];

      if (list > 10) {
        list.shift();
      }

      setLatestList(list);
    } else if (latestListIndex > 0) {
      // 이미 최근 본 과목 리스트에 있을 때
      const list = [...latestList];

      //latestSubject를 맨 앞으로
      list.unshift(list.splice(latestListIndex, 1)[0]);

      setLatestList(list);
    }
  }, [subject]);

  useEffect(() => {
    return () => {
      if (isAuth) {
        const list = value.current.favoriteList;
        if (favoriteList === list) {
          return;
        }

        if (!list) {
          axios
            .post('/favorites/update', {
              sub_id: [],
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          const req = list.map((sub) => {
            return sub.subject_id;
          });
          console.log(req);
          axios
            .post('/favorites/update', {
              sub_id: req,
            })
            .then((res) => {
              if (res.status === 201) {
                console.log(res);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    };
  }, []);

  //
  const deleteInList = (key, latest) => {
    let list;
    if (latest) list = [...latestList];
    else list = [...favoriteList];

    list = list.filter((sub) => sub.subject_id !== key);

    if (latest) setLatestList(list);
    else {
      setFavoriteList(list);
      value.current = list;
      console.log(list);
      let newUserData = { ...userData };
      if (newUserData.subjects) {
        newUserData = {
          ...userData,
          subjects: list,
        };
        console.log(newUserData);

        setUserData(newUserData);
        localStorage.setItem('userData', JSON.stringify(newUserData));
      }
    }
  };

  const toFavorite = () => {
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
        list.shift();
      }

      setFavoriteList(list);
      value.current.favoriteList = list;

      let newUserData = {
        ...userData,
        subjects: list,
      };
      setUserData(newUserData);
      localStorage.setItem('userData', JSON.stringify(newUserData));
    } else {
      // 삭제
      const idx = favoriteList.indexOf(sub);
      if (idx > -1) list.splice(idx, 1);
      setFavoriteList(list);
      value.current.favoriteList = list;

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
                    {subject.과목명}
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
