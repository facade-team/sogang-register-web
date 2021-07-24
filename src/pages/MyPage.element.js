import styled from 'styled-components';

export const Topbar = styled.div`
  justify-content: space-between;
  margin-left: 46px;
  height: 65px;
  width: inherit;
`;

export const Font2 = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: sans-serif;
  align-self: center;
  display: inline;
`;

export const LoginBtn = styled.button`
  height: 30px;
  width: 130px;
  background-color: rgba(182, 6, 0, 0.6);
  border-radius: 10px;
  color: #ffffff;
  border: none;
`;

export const Mainpage = styled.div`
  background: #ffffff;
  margin-left: 30px;
  width: 100%;
  height: 876px;
  max-height: 85vh;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfo = styled.div`
  padding-top: 150px;
  margin-bottom: 20px;
`;

export const ProfilePic = styled.span`
  width: 135px;
  height: 135px;
  background-image: '../assets/images/profile_pic.jpg';
  background-size: 135px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  justify-self: center;
  display: inline-block;
`;

export const ProfileName = styled.div`
  margin-top: 20px;
  font-size: 24px;
  line-height: 40px;
`;

export const InputArea = styled.div`
  margin-bottom: 20px;
`;

export const InputBlank = styled.div`
  margin-bottom: 20px;
`;

export const InputBox = styled.input`
  width: 200px;
`;

export const EmailSendCheck = styled.div`
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const EditBtn = styled.button`
  height: 40px;
  width: 130px;
  background-color: rgba(182, 6, 0, 0.6);
  border-radius: 10px;
  color: #ffffff;
  border: none;
  font-size: 20px;
`;
