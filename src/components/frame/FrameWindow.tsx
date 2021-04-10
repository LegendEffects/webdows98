import React from 'react';
import { FrameProvider, IFrameState } from '../../contexts/FrameContext';
import FrameContainer from './FrameContainer';

export interface FrameWindowProps extends Partial<IFrameState> {
  title: string;
}

const FrameWindow: React.FC<FrameWindowProps> = ({ children, ...props }) => {
  const frame: IFrameState = {
    width: 300,
    height: 200,
    x: 0,
    y: 0,
    z: 1,
    resizable: true,
    dragging: false,
    dragDetails: null,
    actions: {
      minimize: true,
      restore: true,
      close: true
    },

    ...props
  }

  return (
    <FrameProvider frame={frame}>
      <FrameContainer>
        {children}
      </FrameContainer>
    </FrameProvider>
  )
}

export default FrameWindow;