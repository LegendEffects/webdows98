import styled from "@emotion/styled";
import React from "react";
import { useSystem } from "../../../../contexts/SystemContext";
import { useWindow } from "../../../../contexts/WindowContext";
import WindowTitleBar from "./WindowTitleBar";

const WindowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
`;

const ResizeHandle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 10px;
  height: 10px;
`;

const WindowFrame: React.FC = () => {
  const [ , dispatch ] = useSystem();
  const { uuid, frame } = useWindow();

  return (
    <WindowContainer 
      className="window"
      style={{
        width: frame.width,
        height: frame.height,
        transform: `translate3d(${frame.x}px, ${frame.y}px, 0)`
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