import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Subject from '../../components/SubjectCard/SubjectCard';

import { data } from '../DummyData';

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
  const [favoriteList, setFavoriteList] = useState([]);

  const clearFavoriteList = (e) => {
    setFavoriteList([]);
  };

  useEffect(() => {
    axios.get('/join/favorites').then((res) => {
      if (res.data.data === undefined) {
        setFavoriteList([]);
      } else {
        setFavoriteList(res.dat);
      }
    });

    return () => {
      console.log(favoriteList);
      axios
        .post('/join/favorite/update', {
          sub_id: favoriteList,
        })
        .then((res) => {
          if (res.status === 201) {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
