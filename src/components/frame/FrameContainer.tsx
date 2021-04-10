import styled from "@emotion/styled";
import React from "react";
import { useFrame } from "../../contexts/FrameContext"
import useMousePos from "../../hooks/useMousePos";
import WindowTitleBar from "./WindowTitleBar";

const WindowFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const WindowDragOutline = styled(WindowFrame)`
  outline: 1px dotted black;
  outline-offset: --4px;
`;

const FrameContainer: React.FC<{}> = ({ children }) => {
  const mousePos = useMousePos();
  const [ frame, dispatch ] = useFrame();

  return (
    <>
      <WindowFrame
        className="window"
        style={{
          width: frame.width,
          height: frame.height,
          transform: `translate(${frame.x}px, ${frame.y}px)`
        }}
        >
          <WindowTitleBar />
          {children}
      </WindowFrame>

      { frame.dragging && frame.dragDetails !== null && (
        <WindowDragOutline 
          style={{
            width: frame.width,
            height: frame.height,
            transform: `translate(${frame.x + mousePos.x - frame.dragDetails?.mouse.x}px, ${frame.y + mousePos.y - frame.dragDetails?.mouse.y}px)`
          }}
          onMouseUp={() => {
            if(!frame.dragDetails) {
              return;
            }
            dispatch({
              type: 'setLocation',
              x: frame.x + mousePos.x - frame.dragDetails?.mouse.x,
              y: frame.y + mousePos.y - frame.dragDetails?.mouse.y,
            });
            dispatch({ type: 'stopDragging' })
          }}
        />
      )}
    </>
  )
}

export default FrameContainer;