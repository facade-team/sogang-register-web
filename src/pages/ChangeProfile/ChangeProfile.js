import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Title from '../../components/Title/Title';

// 전공리스트
import majorsPair, { getOptionIndex } from '../../utils/majorPair';

// context API
import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

import {
  ContainerBox,
  FormContainer,
  FormGroup,
  SelectForm,
  Label,
  Input,
  MailAllow,
} from './ChangeProfile.element.js';
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../../styles/HomeContainer';

const ChangeProfile = ({ openModal }) => {
  let history = useHistory();
  const { isAuth, userData, setUserData } = useAuthContext();
  const { setSnackBar } = useSnackBarContext();
  const [major, setMajor] = useState(false);

  const [checkBoxValue, setCheckBoxValue] = useState(userData.allowEmail); //api로 초기값 설정

  //useEffect
  // useEffect(() => {
  //   if (userData) {
  //     console.log(userData.major);
  //     const m = userData.major;
  //     setDefaultMajorOption(
  //       m.map((subject) => {
  //         return { value: subject, label: subject };
  //       })
  //     );
  //   }
  // }, [userData]);

  useEffect(() => {
    if (!isAuth) {
      openModal();
      setSnackBar({
        type: 'error',
        msg: '로그인이 필요합니다.',
      });
    }
  }, [userData]);

  const onChange = (e) => {
    const selectedMajor = e.map((items) => items.value); // 배열형태
    if (selectedMajor.length === 0) {
      setMajor(false);
    } else {
      setMajor(selectedMajor);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    if (isAuth) {
      axios
        .post('/user/majoremail', {
          major: major,
          allow_email: checkBoxValue,
        })
        .then((res) => {
          history.push('/mypage');
          setUserData({
            major: major,
            allow_email: checkBoxValue,
            ...userData,
          });
          console.log(localStorage.getItem('userData'));
          localStorage.setItem(
            'userData',
            JSON.stringify({
              major: major,
              allowEmail: checkBoxValue,
              ...userData,
            })
          );
          setSnackBar({
            type: 'success',
            msg: '프로필 수정에 성공하였습니다.',
          });
        })
        .catch((err) => {
          console.log(err);
          setSnackBar({
            type: 'error',
            msg: '프로필 수정에 실패하였습니다.',
          });
        });
    } else {
      setSnackBar({
        value: true,
        message: '새 비밀번호와 비밀번호 확인이 일치하지 않습니다',
      });
    }
  };

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/프로필 수정" openModal={openModal}></Title>
        {isAuth ? (
          <>
            <ContainerBox>
              <FormContainer>
                <FormGroup>
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    readOnly
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="majors">전공 </Label>
                  <SelectForm
                    // value={{ label: '컴퓨터공학' }} TODO: default value -> state
                    // value={}
                    options={majorsPair}
                    isSearchable
                    isClearable
                    isMulti
                    placeholder=""
                    onChange={onChange}
                  ></SelectForm>
                </FormGroup>

                <MailAllow>
                  <Label htmlFor="allow">
                    <p>
                      즐겨찾기한 교과목의 정보 업데이트 시 이메일 수신에
                      동의합니다.
                    </p>
                  </Label>
                  <Input
                    type="checkbox"
                    name="admit"
                    id="allow"
                    checked={checkBoxValue}
                    onChange={() => setCheckBoxValue(!checkBoxValue)}
                  />
                </MailAllow>
                <br></br>
                <GradationBtn
                  width={200}
                  borderRadius={20}
                  active
                  onClick={onClick}
                >
                  수정
                </GradationBtn>
              </FormContainer>
            </ContainerBox>
          </>
        ) : null}
      </MyPageContainer>
    </Container>
  );
};

export default ChangeProfile;
