import styled from "@emotion/styled";
import React from "react";
import { useSystem } from "../../contexts/SystemContext";
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

  
  React.useEffect(() => {
    const testWindow = {
      frame: {
        title: "Test Window",
        icon: "icon-calculator",
        width: 300,
        height: 200,
        x: 0,
        y: 0,
        docked: false,
        dragging: false,
        dragDetails: null,
        resizable: true,
        resizing: false,
        component: NotepadApp,
        actions: {
          minimize: true,
          restore: true,
          close: true
        }
      },
      visible: true
    };

    for (let i = 0; i < 3; i++) {
      dispatch({
        type: 'createWindow',
        window: {
          ...JSON.parse(JSON.stringify(testWindow)),
          frame: {
            ...JSON.parse(JSON.stringify(testWindow.frame)),
            component: NotepadApp
          }
        }
      });
    }
    
    dispatch({
      type: 'createWindow',
      window: {
        visible: testWindow.visible,
        frame: {
          ...testWindow.frame,
          title: 'Unresizable Window',
          resizable: false,
          x: 400
        }
      }
    });
  }, [dispatch])

  return (
    <DesktopContainer>
      <WindowArea />
      <Taskbar />
    </DesktopContainer>
  )
}

export default Desktop;