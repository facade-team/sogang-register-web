import React,{ useState } from 'react';
import { ScrollArea, FoldBtn, ScrollBarArea } from './ScrollData.element';
import Checkbox from '../Checkbox/Checkbox';


const ScrollData = ({ subject, subnum }) => {
  const [FoldActivated,setFoldActivated] = useState(true);
  
  return (
    <>
        {FoldActivated === true ?(
      <ScrollArea>
        <ScrollBarArea>
          <Checkbox subject={subject} subnum={subnum} />
        </ScrollBarArea>
        <FoldBtn onClick = {()=>{setFoldActivated(!FoldActivated)}}>접기 ∧</FoldBtn>
      </ScrollArea>
      )
        :<br/>
        }
    </>
  );
};

export default ScrollData;
