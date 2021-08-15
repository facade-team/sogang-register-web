import React, { useState } from 'react';

//API
import { deleteFavorite, deleteAllFavorite } from '../../API/Favorite';

import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Subject from '../../components/SubjectCard/SubjectCard';

//context
import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';
import Tooltip from '@material-ui/core/Tooltip';

//styled
import {
  Container,
  OptionBtnContainer,
  StackContent,
  SubjectList,
  Divider,
  TrashBtn,
  TooltipContainer,
} from './SubjectList.element.js';

const SubjectListComp = () => {
  const { userData, setUserData } = useAuthContext();
  const { setLoading } = useLoadingContext();
  const { setSnackBar } = useSnackBarContext();
  const [favoriteList, setFavoriteList] = useState(userData.subjects || []);

  const deleteInList = (e, key, latest) => {
    let list;
    list = [...favoriteList];

    list = list.filter((sub) => sub.subject_id !== key);

    setFavoriteList(list);
    deleteFavorite(key, setLoading);

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

    deleteAllFavorite(setLoading, setSnackBar);

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
        <Tooltip title="모두 삭제">
          <TooltipContainer>
            <TrashBtn size={20} onClick={clearFavoriteList}></TrashBtn>
          </TooltipContainer>
        </Tooltip>
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
