import styled from "@emotion/styled";
import React from "react";
import { useSystem } from "../../../contexts/SystemContext";
import useMousePos from "../../../hooks/useMousePos";
import DragType from "../../../interfaces/DragType";

const WindowDragOutline = styled.div`
  z-index: 9999;
  outline: 1px dotted black;
  outline-offset: --4px;
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
  will-change: contents;
`;

const WindowDrag: React.FC = () => {
  const mousePos = useMousePos();

  const [{
    dragging
  }] = useSystem();

  if(!dragging) {
    return (<> </>);
  }

  if(dragging.type === DragType.MOVE && dragging.target) {
    return (
      <WindowDragOutline
        style={{
          width: dragging.target.frame.width,
          height: dragging.target.frame.height,
          transform: `translate3d(${dragging.target.frame.x + mousePos.x - dragging.mousePos.x}px, ${dragging.target.frame.y + mousePos.y - dragging.mousePos.y}px, 0)`
        }}
      />
    )
  }
    
  if(dragging.type === DragType.RESIZE && dragging.target) {
    return (
      <WindowDragOutline
        style={{
          transform: `translate3d(${dragging.target.frame.x}px, ${dragging.target.frame.y}px, 0)`,
          width: dragging.target.frame.width + (mousePos.x - dragging.mousePos.x),
          height: dragging.target.frame.height + (mousePos.y - dragging.mousePos.y)
        }}
      />
    );
  }

  if(dragging.type === DragType.HIGHLIGHT) {
    return (
      <WindowDragOutline
        style={{
          transform: `translate3d(${dragging.mousePos.x - Math.abs(Math.min(0, mousePos.x - dragging.mousePos.x))}px, ${dragging.mousePos.y - Math.abs(Math.min(0, mousePos.y - dragging.mousePos.y))}px, 0)`,
          width: Math.abs(mousePos.x - dragging.mousePos.x),
          height: Math.abs(mousePos.y - dragging.mousePos.y)
        }}
      />
    )
  }

  return (<> </>);
} 

export default WindowDrag;