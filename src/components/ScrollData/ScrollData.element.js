import styled from 'styled-components';

export const ScrollArea = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  box-shadow: 0px 3px 6px 2px rgba(0, 0, 0, 0.34);
  width: 120px;
  border: 2px solid #9387AF;
  border-radius: 20px;
  font-size: 14px;

  z-index: 0;
  flex-direction: column;
  padding-top: 35px;
  align-items: center;
  max-height: 200px;
  left: ${(props)=>{
    return `${-130+140*props.number}px`;
  }};
  top: ${(props)=>{
    return `${-50+0*props.section}px`
  }};

`;

export const FoldBtn = styled.button`
  display: flex;
  color: gray;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  background-color: white;
  border: none;
  border-radius: 20px;
  width: 90%;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.10);
  }
`;

export const ScrollBarArea = styled.div`
overflow-y: auto;
overflow-x: hidden;
display: flex;
flex-wrap : wrap;
justify-content: center;
width: 90%;

&::-webkit-scrollbar {
    width: 7px;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a481eb;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`
