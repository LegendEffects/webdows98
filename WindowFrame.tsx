import styled from "@emotion/styled";
import React from "react";
import { useSystem } from "../../../../contexts/SystemContext";
import { useWindow } from "../../../../contexts/WindowContext";
import WindowTitleBar from "./WindowTitleBar";

const WindowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  will-change: contents;
  
  display: flex;
  flex-direction: column;

  &.docked {
    padding: 0;
    box-shadow: none;
  }
`;

const ResizeHandle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 10px;
  height: 10px;
`;

export interface WindowFrameProps {
  zIndex: number;
}

const WindowFrame: React.FC<WindowFrameProps> = ({ children, zIndex }) => {
  const [ , dispatch ] = useSystem();
  const { uuid, frame } = useWindow();

  return (
    <WindowContainer 
      data-uuid={uuid}
      className={`window ${frame.docked && 'docked'}`}
      style={{
        width: frame.docked ? '100%' : frame.width,
        height: frame.docked ? '100%' : frame.height,
        transform: frame.docked ? undefined : `translate3d(${frame.x}px, ${frame.y}px, 0)`,
        zIndex
      }}
      onMouseDown={() => {
        dispatch({
          type: 'setFocused',
          uuid
        })
      }}
      >
        <WindowTitleBar />

        {frame.resizable && (
          <ResizeHandle className="resize-point cursor-nwse-resize" />
        )}
    </WindowContainer>
  );
}

export default WindowFrame;