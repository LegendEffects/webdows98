import styled from "@emotion/styled";
import React from "react";
import { useSystem } from "../../../contexts/SystemContext";
import useMousePos from "../../../hooks/useMousePos";
import DragType from "../../../interfaces/DragType";
import BuildInfo from "./BuildInfo";
import Window from "./window/Window";
import WindowDrag from "./WindowDrag";

const WindowContainer = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;

  min-height: 100%;
  min-width: 100%;
`

function findWindowContainer(element: HTMLElement, limit: number = 8): {el: HTMLElement, uuid: string} | null {
  let current: HTMLElement = element;
  for (let i = 0; i < limit; i++) {
    const uuid = current.getAttribute('data-uuid');
    if(uuid !== null) {
      return {el: current, uuid};
    }

    if(current.parentElement) {
      current = current.parentElement;
    } else {
      return null;
    }
  }

  return null;
}

const WindowArea: React.FC = () => {
  const [ system, dispatch ] = useSystem();
  const mousePos = useMousePos();

  const handleDragStop = () => {
    if(!system.dragging) {
      return;
    }

    switch(system.dragging.type) {
      case DragType.MOVE:
        if(!system.dragging.target) return;
        dispatch({
          type: 'SET_LOCATION',
          uuid: system.dragging.target.uuid,
          x: system.dragging.target.frame.x + mousePos.x - system.dragging.mousePos.x,
          y: system.dragging.target.frame.y + mousePos.y - system.dragging.mousePos.y
        })
        break;
      case DragType.RESIZE:
        if(!system.dragging.target) return;
        dispatch({
          type: 'SET_SIZE',
          uuid: system.dragging.target.uuid,
          width: system.dragging.target.frame.width + (mousePos.x - system.dragging.mousePos.x),
          height: system.dragging.target.frame.height + (mousePos.y - system.dragging.mousePos.y)
        })
        break;
    }
  }

  return (
    <WindowContainer
      className="desktop"
      onMouseDown={(e) => {
        const el = e.target as HTMLElement;
        let type: DragType | undefined = undefined;

        if(el.classList.contains('drag-point')) {
          type = DragType.MOVE;
        } else if(el.classList.contains('resize-point')) {
          type = DragType.RESIZE;
        } else if(el.classList.contains('desktop')){
          dispatch({
            type: 'START_DRAG',
            action: DragType.HIGHLIGHT,
            mouse: mousePos
          });
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        if(type !== undefined) {
          const container = findWindowContainer(el);
          if(!container) {
            return;
          }

          const windowInstance = system.windows.find((w) => w.uuid === container.uuid);

          if(!windowInstance?.frame.docked) {
            dispatch({
              type: 'SET_DOCKED',
              uuid: container.uuid,
              value: false
            });
  
            dispatch({
              type: 'START_DRAG',
              uuid: container.uuid,
              action: type,
              mouse: mousePos
            });
          }

          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }}

      onMouseUp={() => {
        if(system.dragging) {
          handleDragStop();
          dispatch({
            type: 'STOP_DRAG'
          });
        }
      }}
      >
        <WindowDrag />

        {system.windows.filter(window => window.visible === true).map((window, i) => (
          <Window key={window.uuid} z={i + 5} window={window} />
        ))}

        <BuildInfo />
    </WindowContainer>
  )
}

export default WindowArea;