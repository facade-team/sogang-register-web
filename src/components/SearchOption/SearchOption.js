import React from 'react';
// import { data } from '../../pages/DummyData';
import SubTitle from '../SubTitle/SubTitle';
import { OptionBar } from './SearchOption.element';
import OptionList from '../OptionList/OptionList';
const SearchOption = ({ number, subtitle, submessage }) => {
  return (
    <>
      <SubTitle number={number} subtitle={subtitle} submessage={submessage} />
      <OptionBar>
        <OptionList></OptionList>
      </OptionBar>
    </>
  );
};

export default SearchOption;
