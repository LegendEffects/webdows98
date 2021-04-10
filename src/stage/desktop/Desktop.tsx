import styled from "@emotion/styled";
import React from "react";
import BuildInfo from "../../components/desktop/BuildInfo";
import Taskbar from "../../components/desktop/taskbar/Taskbar";
import FrameWindow from "../../components/frame/FrameWindow";
import WindowArea from "./WindowArea";

const DesktopStage = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  background: rgb(13,113,115);
  overflow: hidden;
`;

const Desktop: React.FC<{}> = () => {
  return (
    <DesktopStage>
      <WindowArea>
        <FrameWindow title="Test Window" />
        <BuildInfo />
      </WindowArea>
      <Taskbar />
    </DesktopStage>
  )
}

export default Desktop;