import React from 'react';
import {
  SubTitleContainer,
  Number,
  SubTitleComp,
  SubMessage,
} from './SubTitle.element';

const SubTitle = ({ number, subtitle, submessage }) => {
  return (
    <SubTitleContainer>
      <Number>{number} </Number>
      <SubTitleComp>{subtitle}</SubTitleComp>
      <SubMessage>{submessage}</SubMessage>
    </SubTitleContainer>
  );
};

export default SubTitle;
