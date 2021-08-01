import React from 'react';
import { CheckContainer, ChkLabel, SubContainer } from './Checkbox.element';

const Checkbox = ({
  subject,
  subnum
}) => {
  return subnum === 1 ? (
    subject.map((subject, yearnum) => (
      <CheckContainer>
        <SubContainer>
          <input
            type="checkbox"
            id={'y' + yearnum}
            style={{ width: '15px', height: '15px', marginRight: '8px' }}
          />
          <ChkLabel for={'y' + yearnum}>{subject}</ChkLabel>
        </SubContainer>
      </CheckContainer>
    ))
  ) : subnum === 2 ? (
    subject.map((subject, profnum) => (
      <CheckContainer>
        <SubContainer>
          <input
            type="checkbox"
            id={'p' + profnum}
            style={{ width: '15px', height: '15px', marginRight: '8px' }}
          />
          <ChkLabel for={'p' + profnum}>{subject}</ChkLabel>
        </SubContainer>
      </CheckContainer>
    ))
  ) : subnum === 3 ? (
    subject.map((subject, timenum) => (
      <CheckContainer>
        <SubContainer>
          <input
            type="checkbox"
            id={'t' + timenum}
            style={{ width: '15px', height: '15px', marginRight: '8px' }}
          />
          <ChkLabel for={'t' + timenum}>{subject}</ChkLabel>
        </SubContainer>
      </CheckContainer>
    ))
  ) : subnum === 4 ? (
    subject.map((subject, langnum) => (
      <CheckContainer>
        <SubContainer>
          <input
            type="checkbox"
            id={'l' + langnum}
            style={{ width: '15px', height: '15px', marginRight: '8px' }}
          />
          <ChkLabel for={'l' + langnum}>{subject}</ChkLabel>
        </SubContainer>
      </CheckContainer>
    ))
  ) : (
    subject.map((subject, zoomnum) => (
      <CheckContainer>
        <SubContainer>
          <input
            type="checkbox"
            id={'z' + zoomnum}
            style={{ width: '15px', height: '15px', marginRight: '8px' }}
          />
          <ChkLabel for={'z' + zoomnum}>{subject}</ChkLabel>
        </SubContainer>
      </CheckContainer>
    ))
  );
};

export default Checkbox;
