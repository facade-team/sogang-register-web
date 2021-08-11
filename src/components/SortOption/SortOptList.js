import React, { useState, useEffect } from 'react';
import { useSubjectContext } from '../../contexts/SubjectContext';

import {
  SectionContainer,
  OptionContainer,
  OptBtn,
} from '../SearchOption/SearchOptList.element';

const SortOptList = () => {
  const [profOption, setProfOption] = useState({
    selected: false,
  });
  const [langOption, setLangOption] = useState({
    selected: false,
  });
  const [contactOption, setContactOption] = useState({
    selected: false,
  });

  return (
    <SectionContainer>
      <OptionContainer>
        <OptBtn>교수</OptBtn>
        <OptBtn>강의언어</OptBtn>
        <OptBtn>대면여부</OptBtn>
      </OptionContainer>
    </SectionContainer>
  );
};

export default SortOptList;
