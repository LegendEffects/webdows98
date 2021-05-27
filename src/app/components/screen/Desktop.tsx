import React, { useEffect } from "react";
import { SystemProvider, useSystem } from "../../contexts/SystemContext";
import createApplicationInstance from "../../utils/CreateApplicationInstance";
import NotepadApp from "../element/application/notepad/NotepadApp";
import BuildInfo from "../element/desktop/BuildInfo";
import DesktopContainer from "../element/desktop/DesktopContainer";
import Taskbar from "../element/desktop/taskbar/Taskbar";
import WindowArea from "../element/desktop/WindowArea";
import useSound from "use-sound";

const DesktopInner: React.FC = () => {
  const [ , dispatch ] = useSystem();
  const [ playStartup ] = useSound("/assets/sound/98/startup.mp3");
  
  useEffect(() => {
    dispatch({
      type: 'CREATE_WINDOW',
      window: createApplicationInstance(NotepadApp)
    });
  }, [ dispatch ])

  useEffect(() => {
    playStartup();
  }, [ playStartup ])
  
  return (
    <DesktopContainer>
      <WindowArea>
        <BuildInfo />
      </WindowArea>
      
      <Taskbar />
    </DesktopContainer>
  )
}

const Desktop: React.FC = () => {
  return (
    <SystemProvider>
      <DesktopInner />
    </SystemProvider>
  );
}


export default Desktop;