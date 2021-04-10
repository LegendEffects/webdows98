import styled from "@emotion/styled";
import React from "react";
import { useSystem } from "../../contexts/SystemContext";
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
  const [ system, dispatch ] = useSystem();

  const testWindow = {
    frame: {
      title: "Test Window",
      icon: "calculator",
      width: 300,
      height: 200,
      x: 0,
      y: 0,
      z: 1,
      dragging: false,
      dragDetails: null,
      resizable: true,
      actions: {
        minimize: true,
        restore: true,
        close: true
      }
    },
    visible: true
  };

  React.useEffect(() => {
    for (let i = 0; i < 8; i++) {
      dispatch({
        type: 'createWindow',
        window: JSON.parse(JSON.stringify(testWindow))
      });
    }
    dispatch({
      type: 'createWindow',
      window: {
        visible: testWindow.visible,
        frame: {
          ...testWindow.frame,
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