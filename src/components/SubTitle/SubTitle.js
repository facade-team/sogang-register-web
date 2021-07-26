import React from 'react';
import { SubTitleContainer, Number, SubTitleComp } from './SubTitle.element';

const SubTitle = ({ number, subtitle }) => {
  return (
    <SubTitleContainer>
      <Number>{number} </Number>
      <SubTitleComp>{subtitle}</SubTitleComp>
    </SubTitleContainer>
  );
};

export default SubTitle;
