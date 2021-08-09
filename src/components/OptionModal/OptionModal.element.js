import styled from 'styled-components';

export const OptionList = styled.li`
  cursor: pointer;
  margin-bottom: 8px;
  padding: 6px 3px;
  &:hover {
    background-color: #f5f6fa;
  }
`;

export const KeywordInputContainer = styled.div`
  width: 100%;
  input {
    padding: 12px 12px;
    height: 40px;
    width: 100%;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #c7c7c7;
    outline: none;
    transition: 0.4s;
  }

  &:focus-within input {
    border-color: #7248db;
  }
`;
