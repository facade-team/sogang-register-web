import react, { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import useInput from '../../hooks/useInput';

import subjects from '../../assets/Subject/Subject';

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
  Select,
  Option,
  Label,
  Input,
  MailAllow,
} from './ProfileMyPage.element.js';

const ProfileMyPage = () => {
  const [form, onChangeForm] = useInput({
    email: '', // api로 초기값 설정
  });

  const { email } = form;

  const [checkBoxValue, setCheckBoxValue] = useState(false); //api로 초기값 설정

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
          <Detail>
            {/* <Name>{userData.name}</Name>
            <Major>{userData.major} 전공</Major> */}
            <Name>오상훈</Name>
            <Major>컴퓨터공학 전공</Major>
          </Detail>
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
          <Select name="majors" id="majors">
            {subjects.map((subject) => {
              return (
                <Option value={subject} key={subject}>
                  {subject}
                </Option>
              );
            })}
          </Select>
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
