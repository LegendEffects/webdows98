import React, { useEffect } from "react";
import { SystemProvider, useSystem } from "../../contexts/SystemContext";
import createApplicationInstance from "../../utils/CreateApplicationInstance";
import NotepadApp from "../element/application/notepad/NotepadApp";
import BuildInfo from "../element/desktop/BuildInfo";
import DesktopContainer from "../element/desktop/DesktopContainer";
import Taskbar from "../element/desktop/taskbar/Taskbar";
import WindowArea from "../element/desktop/WindowArea";
import startupSound from "../../../assets/sound/98/startup.mp3";
import useSound from "use-sound";
import { useUser } from "../../contexts/UserContext";

const DesktopInner: React.FC = () => {
  const [{ volume }] = useUser();
  const [ , dispatch ] = useSystem();
  const [ playStartup ] = useSound(startupSound, { volume });
  
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