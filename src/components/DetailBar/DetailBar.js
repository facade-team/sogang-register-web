import { useState, useEffect } from 'react';

//API
import { addFavorite, deleteFavorite } from '../../API/Favorite';

//components
import GradationBtn from '../GradationBtn/GradationBtn';
import Subject from '../SubjectCard/SubjectCard';
import ProfileBar from '../ProfileBar/ProfileBar';
import StarBtn from './StarBtn';

//context
import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';
import { useLatestSubjectsContext } from '../../contexts/LatestSubjectsContext';
import { useLoadingContext } from '../../contexts/LoadingContext';

//styled
import {
  DetailbarComponent,
  DetailbarContent,
  StackContent,
  DetailContainer,
  Top,
  SubjectName,
  BtnContainer,
  SubjectTable,
  TableBody,
  TableRow,
  TableHead,
  TableData,
  OptionBtnContainer,
  SubjectList,
  Divider,
  CloseBar,
} from './DetailBar.element';
import { Tag, TagContainer } from '../Card/Card.element';
import Tooltip from '@material-ui/core/Tooltip';

const DetailBar = ({
  width,
  height,
  openModal,
  subject,
  clickCard,
  closeDetailBar,
}) => {
  const { isAuth, userData, setUserData } = useAuthContext();
  const { setSnackBar } = useSnackBarContext();
  const { loading, setLoading } = useLoadingContext();
  const { latestSubjects, setLatestSubjects } = useLatestSubjectsContext();

  //최근 본과목 -> true, 즐겨찾기 -> false
  const [latestAndFavoritesToggle, setLatestAndFavoritesToggle] =
    useState(true);
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

  //해당과목 즐겨찾기 여부, 즐겨찾기 추가, 삭제
  useEffect(() => {
    if (isAuth) {
      const existInFavoriteList = favoriteList.find(
        (favorite) => favorite.subject_id === subject.subject_id
      );
      existInFavoriteList ? setCheckBookmark(true) : setCheckBookmark(false);
    }
  }, [subject, favoriteList]);

  useEffect(() => {
    if (!isAuth) {
      setFavoriteList([]);
    }
  }, [isAuth]);

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

  //
  const deleteInList = (e, key, latest) => {
    let list;
    if (latest) list = [...latestSubjects];
    else list = [...favoriteList];

    list = list.filter((sub) => sub.subject_id !== key);

    if (latest) {
      setLatestSubjects(list);
    } else {
      setFavoriteList(list);
      deleteFavorite(key, setLoading, setSnackBar);

      let newUserData = { ...userData };
      if (newUserData.subjects) {
        newUserData = {
          ...userData,
          subjects: list,
        };

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
        list.pop();
        setSnackBar({
          type: 'error',
          msg: '즐겨찾기는 10개까지 담을 수 있습니다.',
        });
        return;
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

  const switchLatestAndFavorites = (e) => {
    if (e.target.innerText === '최근 본 과목' && !latestAndFavoritesToggle) {
      setLatestAndFavoritesToggle(true);
    } else if (e.target.innerText === '즐겨찾기' && latestAndFavoritesToggle) {
      setLatestAndFavoritesToggle(false);
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
      <DetailbarComponent widthPx={width} heightPx={height}>
        <CloseBar
          size="25"
          color="rgba(106,49,223,0.9)"
          onClick={closeDetailBar}
        ></CloseBar>
        <DetailContainer>
          <ProfileBar openModal={openModal} detailbar></ProfileBar>
          <DetailbarContent>
            {JSON.stringify(subject) === '{}' ? null : (
              <>
                <Top>
                  <SubjectName font={19}>
                    {subject.과목명}{' '}
                    <span style={{ fontSize: '13px' }}>
                      [{subject.subject_id.substring(14, 15)}반]
                    </span>
                  </SubjectName>
                  <Tooltip title="즐겨찾기">
                    <BtnContainer>
                      {!loading ? (
                        <StarBtn
                          size={22}
                          checkBookmark={checkBookmark}
                          onClick={toFavorite}
                        ></StarBtn>
                      ) : (
                        <StarBtn
                          size={22}
                          checkBookmark={checkBookmark}
                        ></StarBtn>
                      )}
                    </BtnContainer>
                  </Tooltip>
                </Top>
                <TagContainer>
                  {subject.대면여부 === '비대면' ? (
                    <Tag untact fontSize="12">
                      비대면
                    </Tag>
                  ) : null}
                  {subject.대면여부 === '대면' ? (
                    <Tag ontact fontSize="12">
                      대면
                    </Tag>
                  ) : null}
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
          {/* //최근 본 과목, 즐겨찾기 */}
          <StackContent>
            <OptionBtnContainer>
              <GradationBtn
                width={120}
                borderRadius={20}
                active={latestAndFavoritesToggle}
                onClick={switchLatestAndFavorites}
                marginRight={-16}
              >
                최근 본 과목
              </GradationBtn>
              <GradationBtn
                width={120}
                borderRadius={20}
                active={!latestAndFavoritesToggle}
                onClick={switchLatestAndFavorites}
                marginRight={-16}
                mouseover
              >
                즐겨찾기
              </GradationBtn>
            </OptionBtnContainer>
            <SubjectList>
              {latestAndFavoritesToggle
                ? latestSubjects &&
                  latestSubjects.map((sub, index) => (
                    <div key={`${sub.subject_id}${index}`}>
                      <Subject
                        subject={sub}
                        onClick={() => clickCard(sub.subject_id)}
                        active={true}
                        onDelete={false}
                        latest={true}
                      ></Subject>
                      {index !== latestSubjects.length - 1 && (
                        <Divider></Divider>
                      )}
                    </div>
                  ))
                : favoriteList &&
                  favoriteList.map((sub, index) => (
                    <div key={`${sub.subject_id}${index}`}>
                      <Subject
                        subject={sub}
                        onClick={() => clickCard(sub.subject_id)}
                        active={true}
                        onDelete={deleteInList}
                        latest={false}
                      ></Subject>
                      {index !== favoriteList.length - 1 && <Divider></Divider>}
                    </div>
                  ))}
            </SubjectList>
          </StackContent>
        </DetailContainer>
      </DetailbarComponent>
    </>
  );
};

export default DetailBar;
