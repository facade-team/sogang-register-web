import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Subject from '../../components/SubjectCard/SubjectCard';

//context
import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

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
  const { isAuth, userData } = useAuthContext();
  const [favoriteList, setFavoriteList] = useState([]);
  const { setSnackBar } = useSnackBarContext();

  const clearFavoriteList = (e) => {
    setFavoriteList([]);
    localStorage.removeItem('subject');
  };

  useEffect(() => {
    if (userData.token) {
      if (localStorage.getItem('subject') === null) {
        if (isAuth) {
          axios
            .get('/favorites/')
            .then((res) => {
              console.log(res);
              if (res.status === 201) {
                setFavoriteList(res.data.data);
              }
            })
            .catch((err) => {
              setSnackBar({
                type: 'error',
                msg: '즐겨찾기 과목을 불러오는데 오류가 발생했습니다.',
              });
            });
        }
      } else {
        setFavoriteList(JSON.parse(localStorage.getItem('subject')));
      }
    }

    return () => {
      if (userData.token) {
        if (isAuth) {
          console.log(123);
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
      }
    };
  }, [userData.token]);

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
        <SubjectList>
          {favoriteList.map((sub, index) => (
            <>
              <Subject
                key={sub.subject_id}
                subject={sub}
                active={false}
              ></Subject>
              {index !== favoriteList.length - 1 && <Divider></Divider>}
            </>
          ))}
        </SubjectList>
      </StackContent>
    </Container>
  );
};

export default SubjectListComp;
