import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import { OptionBar } from './SortOption.element';
import SortOptList from './SortOptList';

const DetailOption = ({ number, subtitle }) => {
  return (
    <>
      <SubTitle number={number} subtitle={subtitle} />
      <OptionBar>
        <SortOptList></SortOptList>
      </OptionBar>
    </>
  );
};

export default DetailOption;
