import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import { OptionBar } from './DetailOption.element';
import SubList from '../SubList/SubList';

const DetailOption = ({ number, subtitle }) => {
  return (
    <>
      <SubTitle number={number} subtitle={subtitle} />
      <OptionBar>
        <SubList></SubList>
      </OptionBar>
    </>
  );
};

export default DetailOption;
