import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Subject from '../../components/SubjectCard/SubjectCard';

//context
import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';
import { useLoadingContext } from '../../contexts/LoadingContext';

//styled
import {
  Container,
  OptionBtnContainer,
  StackContent,
  SubjectList,
  Divider,
  TrashBtn,
} from './SubjectList.element.js';

const SubjectListComp = () => {
  const { isAuth, userData, setUserData } = useAuthContext();
  const [favoriteList, setFavoriteList] = useState([]);
  const { setSnackBar } = useSnackBarContext();
  const { setLoading } = useLoadingContext();

  const clearFavoriteList = (e) => {
    setFavoriteList([]);
    const newUserData = { ...userData };
    if (newUserData.hasOwnProperty('subjects')) {
      delete newUserData.subjects;

      setUserData(newUserData);
      localStorage.setItem('userData', JSON.stringify(newUserData));
    }
  };

  useEffect(() => {
    console.log(userData.subjects);
    setFavoriteList(userData.subjects);
    // if (userData.token) {
    //   if (localStorage.getItem('subject') === null) {
    //     if (isAuth) {
    //       setLoading(true);
    //       axios
    //         .get('/favorites/')
    //         .then((res) => {
    //           console.log(res);
    //           setLoading(false);
    //           if (res.status === 201) {
    //             setFavoriteList(res.data.data);
    //           }
    //         })
    //         .catch((err) => {
    //           setLoading(false);
    //           console.log(err);
    //           setSnackBar({
    //             type: 'error',
    //             msg: '즐겨찾기 과목을 불러오는데 오류가 발생했습니다.',
    //           });
    //         });
    //     }
    //   } else {
    //     setFavoriteList(JSON.parse(localStorage.getItem('subject')));
    //   }
    // }

    // if (userData.subjects) {
    // }

    // return () => {
    //   if (userData.token) {
    //     if (isAuth) {
    //       console.log(123);
    //       console.log(favoriteList);
    //       const req = favoriteList.map((sub) => {
    //         return sub.subject_id;
    //       });
    //       axios
    //         .post('/favorites/update', {
    //           sub_id: req,
    //         })
    //         .then((res) => {
    //           if (res.status === 201) {
    //             console.log(res);
    //           }
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }
    //   }
    // };
  }, [userData.subjects]);

  useEffect(() => {
    return () => {
      if (isAuth) {
        if (userData.hasOwnProperty('subjects')) {
          const req = userData.subjects.map((sub) => {
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
        } else if (favoriteList.length === 0) {
          axios
            .post('/favorites/update', {
              sub_id: [],
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    };
  }, []);

  return (
    <Container>
      {/* 즐겨찾기 */}
      <StackContent>
        <TrashBtn size={20} onClick={clearFavoriteList}></TrashBtn>
        <OptionBtnContainer>
          <GradationBtn
            width={120}
            borderRadius={20}
            active={true}
            mouseover={false}
          >
            즐겨찾기
          </GradationBtn>
        </OptionBtnContainer>
        {favoriteList ? (
          <SubjectList>
            {favoriteList.map((sub, index) => (
              <div key={`${sub.subject_id}${index}`}>
                <Subject subject={sub} active={false}></Subject>
                {index !== favoriteList.length - 1 && <Divider></Divider>}
              </div>
            ))}
          </SubjectList>
        ) : null}
      </StackContent>
    </Container>
  );
};

export default SubjectListComp;
