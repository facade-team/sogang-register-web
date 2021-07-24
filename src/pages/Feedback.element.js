import styled from 'styled-components';

export const TopBar = styled.div`
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

export const LogInBtn = styled.button`
  height: 30px;
  width: 130px;
  background-color: rgba(182, 6, 0, 0.6);
  border-radius: 10px;
  color: #ffffff;
  border: none;
`;

export const MainPage = styled.div`
  background: #ffffff;
  margin-left: 30px;
  width: 90vw;
  height: 876px;
  max-height: 85vh;
  padding-left: 36px;
  padding-top: 20px;
  border-radius: 10px;
`;

export const Introduce = styled.div`
  height: 10vh;
  min-height: 60px;
`;

export const Font3 = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: sans-serif;
`;

export const Font4 = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const OneLineInput = styled.input`
  background-color: #f1ebeb;
  height: 35px;
  width: 80vw;
  margin-bottom: 30px;
  min-width: 200px;
  border: none;
  border-radius: 5px;
`;

export const MultiLineInput = styled.textarea`
  background-color: #f1ebeb;
  min-width: 200px;
  width: 80vw;
  min-height: 20vh;
  height: 280px;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
  resize: none;
`;

export const SubmitBtn = styled.button`
  width: 80vw;
  min-width: 200px;
  height: 40px;
  background-color: rgba(182, 6, 0, 0.6);
  border-radius: 10px;
  font-size: 25px;
  color: #ffffff;
  border: none;
`;
