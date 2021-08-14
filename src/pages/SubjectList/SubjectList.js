import React, { useState } from 'react';
import axios from 'axios';

//API
import PostFavorite from '../../API/PostFavorite';

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
  const { isAuth, userData, setUserData } = useAuthContext();
  const [favoriteList, setFavoriteList] = useState(userData.subjects || []);

  const deleteInList = (key, latest) => {
    let list;
    list = [...favoriteList];

    list = list.filter((sub) => sub.subject_id !== key);

    console.log(list);
    setFavoriteList(list);

    PostFavorite(list);

    let newUserData = { ...userData };
    if (newUserData.subjects) {
      newUserData = {
        ...userData,
        subjects: list,
      };

      setUserData(newUserData);
      localStorage.setItem('userData', JSON.stringify(newUserData));
    }
  };

  const clearFavoriteList = (e) => {
    setFavoriteList([]);

    PostFavorite([]);

    const newUserData = { ...userData };
    if (newUserData.hasOwnProperty('subjects')) {
      delete newUserData.subjects;

      setUserData(newUserData);
      localStorage.setItem('userData', JSON.stringify(newUserData));
    }
  };

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
