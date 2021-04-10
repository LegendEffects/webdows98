import styled from '@emotion/styled';
import React from 'react';
import { useFrame } from '../../contexts/FrameContext';

const TitleBar = styled.div`
  user-select: none;
`;

export interface WindowTitleBarProps {

}

const WindowTitleBar: React.FC<WindowTitleBarProps> = () => {
  const [ frame, dispatch ] = useFrame();

  return (
    <>
      <TitleBar 
        className="title-bar"
        onMouseDown={(e) => {
          dispatch({
            type: 'startDragging',
            details: {
              mouse: {
                x: e.clientX,
                y: e.clientY
              },
              offset: {
                x: e.clientX - frame.x,
                y: e.clientY - frame.y
              }
            }
          })
        }}
        >
          <div className="title-bar-text">{frame.title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
      </TitleBar>
    </>
  )
}

export default WindowTitleBar;