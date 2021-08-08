import React from 'react';
// import { data } from '../../pages/DummyData';
import SubTitle from '../SubTitle/SubTitle';
import { OptionBar } from './SearchOption.element';
// import OptionList from '../OptionList/OptionList';
import SearchOptList from './SearchOptList';
const SearchOption = ({ number, subtitle, submessage }) => {
  return (
    <>
      <SubTitle number={number} subtitle={subtitle} submessage={submessage} />
      <OptionBar>
        <SearchOptList></SearchOptList>
      </OptionBar>
    </>
  );
};

export default SearchOption;
