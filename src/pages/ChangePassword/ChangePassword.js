import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//hooks
import useInput from '../../hooks/useInput';

//context
import { useSnackBarContext } from '../../contexts/SnackBarContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';

//component
import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Title from '../../components/Title/Title';

//styled
import {
  ContainerBox,
  Input,
  FormContainer,
  FormGroup,
  Form,
  Label,
} from './ChangePassword.element';
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../../styles/HomeContainer';

const ChangePassword = ({ openModal }) => {
  let history = useHistory();
  const { setSnackBar } = useSnackBarContext();
  const { isAuth } = useAuthContext();
  const { setLoading } = useLoadingContext();
  const [form, onChangeForm] = useInput({
    currentPassword: '',
    newPassword: '',
    checkPassword: '',
  });

  const onClick = (e) => {
    if (newPassword === checkPassword) {
      setLoading(true);
      axios
        .post('/privacy/passwordchange', {
          old_password: currentPassword,
          new_password: newPassword,
        })
        .then((res) => {
          setLoading(false);
          history.push('/mypage');
          setSnackBar({
            type: 'success',
            msg: '새로운 비밀번호로 변경되었습니다.',
          });
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          if (err.response.status === 401) {
            setSnackBar({
              type: 'error',
              msg: '이전 비밀번호가 일치하지 않습니다.',
            });
          } else {
            setSnackBar({
              type: 'error',
              msg: '인증에 실패했습니다.',
            });
          }
        });
    } else {
      setSnackBar({
        type: 'error',
        msg: '새 비밀번호와 비밀번호 확인이 일치하지 않습니다',
      });
    }
  };

  const { currentPassword, newPassword, checkPassword } = form;

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/비밀번호 변경" openModal={openModal}></Title>
        <ContainerBox>
          <FormContainer>
            <Form>
              <FormGroup>
                <Label htmlFor="currentPassword">현재 비밀번호</Label>
                <Input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={onChangeForm}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="newPassword">새 비밀번호</Label>
                <Input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={newPassword}
                  onChange={onChangeForm}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="checkPassword">새 비밀번호 확인</Label>
                <Input
                  type="password"
                  name="checkPassword"
                  id="checkPassword"
                  value={checkPassword}
                  onChange={onChangeForm}
                />
              </FormGroup>
              <br></br>
              <GradationBtn
                width={200}
                borderRadius={20}
                active
                onClick={onClick}
              >
                확인
              </GradationBtn>
            </Form>
          </FormContainer>
        </ContainerBox>
      </MyPageContainer>
    </Container>
  );
};

export default ChangePassword;
