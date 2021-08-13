import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Subject from '../../components/SubjectCard/SubjectCard';

//context
import { useAuthContext } from '../../contexts/AuthContext';

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
  const value = useRef({});
  const { isAuth, userData, setUserData } = useAuthContext();
  const [favoriteList, setFavoriteList] = useState(userData.subjects || []);

  const deleteInList = (key, latest) => {
    let list;
    list = [...favoriteList];

    list = list.filter((sub) => sub.subject_id !== key);

    console.log(list);
    setFavoriteList(list);
    value.current.favoriteList = list;

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
  };

  const clearFavoriteList = (e) => {
    setFavoriteList([]);
    value.current.favoriteList = [];
    const newUserData = { ...userData };
    if (newUserData.hasOwnProperty('subjects')) {
      delete newUserData.subjects;

      setUserData(newUserData);
      localStorage.setItem('userData', JSON.stringify(newUserData));
    }
  };

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
                <Subject
                  subject={sub}
                  active={false}
                  onDelete={deleteInList}
                  latest={false}
                ></Subject>
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
