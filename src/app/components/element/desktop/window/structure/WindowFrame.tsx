import React from "react";
import { WindowFrameContainer } from "./WindowElements";


export interface WindowFrameProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  x: number;
  y: number;
  z?: number;
  
  width?: number;
  height?: number;

  docked?: boolean;
  focused?: boolean;

  children?: React.ReactNode;
}

const WindowFrame = React.forwardRef<HTMLDivElement, WindowFrameProps>(({ children, x, y, z, width, height, docked, focused, ...props }, ref) => {
  return (
    <WindowFrameContainer
      style={{
        width: docked ? '100%' : width,
        height: docked ? '100%' : height,
        transform: docked ? undefined : `translate3d(${x}px, ${y}px, 0)`,
        zIndex: z
      }}
      
      className={`window ${docked ? 'docked' : ''} ${focused ? 'focused' : ''}`}
      ref={ref}

      {...props}
      >
      {children}
    </WindowFrameContainer>
  );
})

export default WindowFrame;