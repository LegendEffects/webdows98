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
  background-image: url('assets/icons/start_button.png');
  background-repeat: no-repeat;
  background-position: center;

  min-height: initial;
  min-width: initial;
  
  width: 54px;
  height: ${TASKBAR_HEIGHT}px;
`;

const StartButton: React.FC = () => {
  const startBtnContainer = React.useRef<HTMLDivElement>(null);
  const [ isOpen, setIsOpen ] = React.useState(false);

  // Close the start menu if it's unfocused.
  React.useEffect(() => {
    const onMouseDownEvent = (e: MouseEvent) => {
      // Ignore if it was a mouse down within the start menu
      if(e.target && startBtnContainer.current?.contains(e.target as Node)) {
        return;
      }

      setIsOpen(false);
    }

    window.addEventListener('mousedown', onMouseDownEvent);

    return () => {
      window.removeEventListener('mousedown', onMouseDownEvent);
    }
  }, [ ]);

  return (
    <StartBtnContainer ref={startBtnContainer}>
      <StartBtn className={isOpen ? 'active' : undefined} onClick={() => {setIsOpen(!isOpen)}} />

      {isOpen && (
        <StartMenu/>
      )}
    </StartBtnContainer>
  )
}

export default StartButton;
