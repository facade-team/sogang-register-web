import { useState } from 'react';

import { IoPersonCircleOutline } from 'react-icons/io5';
import useInput from '../../hooks/useInput';

import majors from '../../assets/Major/Major';
import { useAuthContext } from '../../contexts/AuthContext';

import {
  Container,
  Profile,
  FormContainer,
  FormGroup,
  ProfileContainer,
  Avatar,
  Detail,
  Name,
  Major,
  SelectForm,
  Label,
  Input,
  MailAllow,
} from './ProfileMyPage.element.js';

const ProfileMyPage = () => {
  const [major, setMajor] = useState(false);
  const [form, onChangeForm] = useInput({
    email: '', // api로 초기값 설정
  });

  const { email } = form;

  const [checkBoxValue, setCheckBoxValue] = useState(false); //api로 초기값 설정

  const onChange = (e) => {
    const selectedMajor = e.map((items) => items.value); // 배열형태
    if (selectedMajor.length === 0) {
      setMajor(false);
    } else {
      setMajor(selectedMajor);
    }
  };

  const { userData } = useAuthContext();

  return (
    <Container>
      <Profile>
        <ProfileContainer>
          <Avatar>
            <IoPersonCircleOutline
              size="80"
              color="#7F7F7F"
            ></IoPersonCircleOutline>
          </Avatar>
          {userData.major ? (
            <Detail>
              <Name>{userData.username}</Name>
              <Major>{userData.major[0]} 전공</Major>
            </Detail>
          ) : null}
        </ProfileContainer>
      </Profile>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onChangeForm}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="majors">전공 </Label>
          <SelectForm
            options={majors}
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
              즐겨찾기한 교과목의 정보 업데이트 시 이메일 수신에 동의합니다.
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
      </FormContainer>
    </Container>
  );
};

export default ProfileMyPage;
