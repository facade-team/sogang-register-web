import { useState, useEffect } from 'react';
import axios from 'axios';

//components
import GradationBtn from '../GradationBtn/GradationBtn';
import Subject from '../SubjectCard/SubjectCard';
import ProfileBar from '../ProfileBar/ProfileBar';
import StarBtn from './StarBtn';

//context
import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

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
} from './DetailBar.element';
import { Tag, TagContainer } from '../Card/Card.element';

const DetailBar = ({ width, height, openModal, subject, clickCard }) => {
  const { isAuth, userData } = useAuthContext();
  const { setSnackBar } = useSnackBarContext();

  //최근 본과목 -> true, 즐겨찾기 -> false
  const [latestAndFavoritesToggle, setLatestAndFavoritesToggle] =
    useState(true);
  const [latestList, setLatestList] = useState([subject]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [checkBookmark, setCheckBookmark] = useState(false);

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
    if (localStorage.getItem('subject') === null) {
      if (isAuth && userData.token) {
        axios
          .get('/favorites/')
          .then((res) => {
            if (res.status === 201) {
              setFavoriteList(res.data.data);
            }
          })
          .catch((err) => {
            console.log(err);
            setSnackBar({
              type: 'error',
              msg: '즐겨찾기 과목을 불러오는데 오류가 발생했습니다.',
            });
          });
      }
    } else {
      if (localStorage.getItem('subject') !== null) {
        setFavoriteList(JSON.parse(localStorage.getItem('subject')));
      }
    }

    return () => {
      if (isAuth && userData.token) {
        const req = favoriteList.map((sub) => {
          return sub.subject_id;
        });
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
    };
  }, [userData.token]);

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
      const list = [subject, ...latestList];

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

      if (localStorage.getItem('subject') !== null) {
        const currentFavorite = JSON.parse(localStorage.getItem('subject'));
        localStorage.setItem(
          'subject',
          JSON.stringify([subject, ...currentFavorite])
        );
      } else {
        localStorage.setItem('subject', JSON.stringify([subject]));
      }
    } else {
      //삭제
      const idx = favoriteList.indexOf(sub);
      if (idx > -1) list.splice(idx, 1);
      setFavoriteList(list);
      if (localStorage.getItem('subject') !== null) {
        let currentFavorite = JSON.parse(localStorage.getItem('subject'));
        currentFavorite = currentFavorite.filter((s) => {
          console.log(s.subject_id === subject.subject_id);
          if (s.subject_id === subject.subject_id) return false;
          return true;
        });
        console.log(currentFavorite);
        localStorage.setItem('subject', JSON.stringify(currentFavorite));
      } else {
        localStorage.setItem('subject', JSON.stringify([subject]));
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

  return (
    <>
      <DetailbarComponent widthPx={width} heightPx={height}>
        <DetailContainer>
          <ProfileBar openModal={openModal} detailbar></ProfileBar>
          <DetailbarContent>
            {JSON.stringify(subject) === '{}' ? null : (
              <>
                <Top>
                  <SubjectName font={19}>{subject.과목명}</SubjectName>
                  <BtnContainer>
                    <StarBtn
                      size={22}
                      checkBookmark={checkBookmark}
                      onClick={toFavorite}
                    ></StarBtn>
                  </BtnContainer>
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
                      <TableData corner={false}>조회하기</TableData>
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
              >
                즐겨찾기
              </GradationBtn>
            </OptionBtnContainer>
            <SubjectList>
              {latestAndFavoritesToggle
                ? latestList &&
                  latestList.map((sub, index) => (
                    <div key={`${sub.subject_id}${index}`}>
                      <Subject
                        // key={`${subject.subject_id}index`}
                        subject={sub}
                        onClick={() => clickCard(sub.subject_id)}
                        active={true}
                      ></Subject>
                      {index !== latestList.length - 1 && <Divider></Divider>}
                    </div>
                  ))
                : favoriteList &&
                  favoriteList.map((sub, index) => (
                    <div key={`${sub.subject_id}${index}`}>
                      <Subject
                        // key={subject.subject_id}
                        subject={sub}
                        onClick={() => clickCard(sub.subject_id)}
                        active={true}
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
