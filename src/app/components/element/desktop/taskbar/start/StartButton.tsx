import styled from "@emotion/styled";
import React from "react";
import { TASKBAR_HEIGHT } from "../../../../../constants/Taskbar";
import StartMenu from "./StartMenu";

const StartBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const StartBtn = styled.button`
  background-image: url('/assets/icons/start_button.png');
  background-repeat: no-repeat;
  background-position: center;

  min-height: initial;
  min-width: initial;
  
  width: 54px;
  height: ${TASKBAR_HEIGHT}px;
`;

const StartButton: React.FC = () => {
  const [ isOpen, setIsOpen ] = React.useState(true);

  return (
    <StartBtnContainer>
      <StartBtn className={isOpen ? 'active' : undefined} onClick={() => {setIsOpen(!isOpen)}} />

      {isOpen && (
        <StartMenu/>
      )}
    </StartBtnContainer>
  )
}

export default StartButton;
