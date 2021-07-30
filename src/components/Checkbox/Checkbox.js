import React from 'react';
import { CheckContainer, ChkLabel, SubContainer } from './Checkbox.element';

const Checkbox = ({
  subject,
  YearFocused,
  ProfFocused,
  TimeFocused,
  LangFocused,
  ZoomFocused,
}) => {
  return YearFocused === true ? (
    <CheckContainer>
      <SubContainer>
        <input
          type="checkbox"
          id="1stYear"
          style={{ width: '15px', height: '15px', marginRight: '8px' }}
        />
        <ChkLabel for="1stYear">{subject[0]}</ChkLabel>
      </SubContainer>
      <SubContainer>
        <input
          type="checkbox"
          id="2ndYear"
          style={{ width: '15px', height: '15px', marginRight: '8px' }}
        />
        <label for="2ndYear">{subject[1]}</label>
      </SubContainer>
      <SubContainer>
        <input
          type="checkbox"
          id="3rdYear"
          style={{ width: '15px', height: '15px', marginRight: '8px' }}
        />
        <label for="3rdYear">{subject[2]}</label>
      </SubContainer>
      <SubContainer>
        <input
          type="checkbox"
          id="4thYear"
          style={{
            width: '15px',
            height: '15px',
            marginRight: '8px',
          }}
        />
        <label for="4thYear">{subject[3]}</label>
      </SubContainer>
    </CheckContainer>
  ) : ProfFocused === true ? (
    <>
      <CheckContainer>
        <input type="checkbox" />
        <label>{subject} 교수</label>
      </CheckContainer>
      <h2>will be fixed</h2>
    </>
  ) : TimeFocused === true ? (
    <>
      <CheckContainer>
        <input type="checkbox" />
        {subject}
      </CheckContainer>
      <h2>will be fixed</h2>
    </>
  ) : LangFocused === true ? (
    <CheckContainer>
      <SubContainer>
        <input
          type="checkbox"
          id="1stLang"
          style={{ width: '15px', height: '15px', marginRight: '8px' }}
        />
        <label for="1stLang">{subject[0]}</label>
      </SubContainer>
      <SubContainer>
        <input
          type="checkbox"
          id="2ndLang"
          style={{ width: '15px', height: '15px', marginRight: '8px' }}
        />
        <label for="2ndLang">{subject[1]}</label>
      </SubContainer>
    </CheckContainer>
  ) : (
    <CheckContainer>
      <SubContainer>
        <input
          type="checkbox"
          id="1stZoom"
          style={{ width: '15px', height: '15px', marginRight: '8px' }}
        />
        <label for="1stZoom">{subject[0]}</label>
      </SubContainer>
      <SubContainer>
        <input
          type="checkbox"
          id="2ndZoom"
          style={{ width: '15px', height: '15px', marginRight: '8px' }}
        />
        <label for="2ndZoom">{subject[1]}</label>
      </SubContainer>
    </CheckContainer>
  );
};

export default Checkbox;
