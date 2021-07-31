import { MdCheckCircle } from 'react-icons/md';
import styled from 'styled-components';

// styling
const CustomCheck = styled(MdCheckCircle)`
  cursor: pointer;
`;

const CompleteBtn = ({ size, color }) => {
  return (
    <>
      <CustomCheck size={size} color="lightgray"></CustomCheck>
    </>
  );
};

export default CompleteBtn;
