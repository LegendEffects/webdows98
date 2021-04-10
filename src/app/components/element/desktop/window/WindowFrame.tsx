import styled from "@emotion/styled";
import React from "react";
import { useSystem } from "../../../../contexts/SystemContext";
import { useWindow } from "../../../../contexts/WindowContext";
import useMousePos from "../../../../hooks/useMousePos";
import WindowTitleBar from "./WindowTitleBar";

const WindowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
`;

const WindowDragOutline = styled(WindowContainer)`
  z-index: 9999;
  outline: 1px dotted black;
  outline-offset: --4px;
`;

const WindowFrame: React.FC = () => {
  const mousePos = useMousePos();
  const [ , dispatch ] = useSystem();
  const { uuid, frame } = useWindow();

  return (
    <div>
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
      </WindowContainer>
      {frame.dragging && frame.dragDetails !== null && (
        <WindowDragOutline 
          style={{
            width: frame.width,
            height: frame.height,
            transform: `translate3d(${frame.x + mousePos.x - frame.dragDetails?.mouse.x}px, ${frame.y + mousePos.y - frame.dragDetails?.mouse.y}px, 0)`
          }}

          onMouseUp={() => {
            if(!frame.dragDetails) {
              return;
            }
            dispatch({
              type: 'setLocation',
              uuid,
              x: frame.x + mousePos.x - frame.dragDetails?.mouse.x,
              y: frame.y + mousePos.y - frame.dragDetails?.mouse.y,
            });
            dispatch({ type: 'stopDragging', uuid });
          }}
        />
      )}
    </div>
  );
}

export default WindowFrame;