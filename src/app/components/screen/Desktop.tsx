import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useSystem } from "../../contexts/SystemContext";
import createApplicationInstance from "../../utils/CreateApplicationInstance";
import NotepadApp from "../element/application/notepad/NotepadApp";
import Taskbar from "../element/desktop/taskbar/Taskbar";
import WindowArea from "../element/desktop/WindowArea";

const DesktopContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  background: rgb(13,113,115);
  overflow: hidden;
`;

const Desktop: React.FC = () => {
  const [ , dispatch ] = useSystem();

  useEffect(() => {
    dispatch({
      type: 'CREATE_WINDOW',
      window: createApplicationInstance(NotepadApp)
    });
  }, [ dispatch ])

  return (
    <DesktopContainer>
      <WindowArea />
      <Taskbar />
    </DesktopContainer>
  )
}

export default Desktop;