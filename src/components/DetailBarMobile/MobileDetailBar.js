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
  // const { setLoading, loading } = useLoadingContext();
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
      // ?????? ??? ?????? ???????????? ?????? ???
      const list = [subject, ...latestSubjects];

      if (list.length > 10) {
        list.pop();
      }

      setLatestSubjects(list);
    } else if (latestListIndex > 0) {
      // ?????? ?????? ??? ?????? ???????????? ?????? ???
      const list = [...latestSubjects];

      //latestSubject??? ??? ?????????
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
        msg: '???????????? ???????????????.',
      });
      return;
    }
    // ???????????? ?????? ????????? ??? ?????? ?????? ???????????? ???????????? ??????. ??? ??? ??? ????????? ???????????? ??????????????? ??????
    const sub = favoriteList.find((favorite) => {
      return favorite.subject_id === subject.subject_id;
    });
    let list = [...favoriteList];

    if (sub === undefined) {
      //??????
      list = favoriteList.concat(subject);

      if (list.length > 10) {
        list.pop();
        setSnackBar({
          type: 'error',
          msg: '??????????????? 10????????? ?????? ??? ????????????.',
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
      //??????
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
      msg: '?????? ???????????? ???????????????!',
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
                  <SubjectName text={subject.?????????} font={20}>
                    {subject.?????????}{' '}
                    {subject.subject_id.substring(13, 14) === '0' ? ( // 01?
                      <span style={{ fontSize: '13px' }}>
                        [{subject.subject_id.substring(14, 15)}???]
                      </span>
                    ) : (
                      // 10?
                      <span style={{ fontSize: '13px' }}>
                        [{subject.subject_id.substring(13, 15)}???]
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
                {subject.???????????? ? (
                  <Tag untact fontSize="12">
                    ?????????
                  </Tag>
                ) : (
                  <Tag ontact fontSize="12">
                    ??????
                  </Tag>
                )}
                <Tag fontSize="12" credit={subject.??????}>
                  {subject.??????}??????
                </Tag>
                {subject.???????????? === '??????' ? (
                  <Tag eng fontSize="12">
                    ????????????
                  </Tag>
                ) : null}
                {subject.???????????? === '?????????' ? (
                  <Tag china fontSize="12">
                    ???????????????
                  </Tag>
                ) : null}
              </TagContainer>
              <SubjectTable>
                <TableBody>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      ??????/??????
                    </TableHead>
                    <TableData corner={false}>{subject.??????}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      ????????????
                    </TableHead>
                    <TableData corner={false}>
                      {subject.subject_id.substring(5)}
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      ???????????????
                    </TableHead>
                    <TableData corner={false}>
                      <Tag
                        bgColor="#95a5a6"
                        onClick={handleClick}
                        style={{ cursor: 'pointer' }}
                      >
                        ????????????
                      </Tag>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      ??????
                    </TableHead>
                    <TableData corner={false}>{subject.??????}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      ????????????
                    </TableHead>
                    <TableData corner={false}>
                      {subject.??????1 === subject.??????2 ? (
                        <p>
                          {subject.??????1} {subject.??????1}
                        </p>
                      ) : null}
                      {subject.??????1 !== subject.??????2 ? (
                        <>
                          {subject.??????1 === subject.??????2 ? (
                            <p>
                              {subject.??????1},{subject.??????2} {subject.??????1}
                            </p>
                          ) : (
                            <p>
                              {subject.??????1} {subject.??????1} ,{subject.??????2}{' '}
                              {subject.??????2}
                            </p>
                          )}
                        </>
                      ) : null}
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      ??????
                    </TableHead>
                    <TableData corner={false}>{subject.?????????}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={false}>
                      ????????????
                    </TableHead>
                    <TableData corner={false}>{subject.????????????}</TableData>
                  </TableRow>
                  <TableRow>
                    <TableHead scope="row" corner={true}>
                      ??????
                    </TableHead>
                    <TableData corner={true}>
                      {subject.?????? ? subject.?????? : '??????'}
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
