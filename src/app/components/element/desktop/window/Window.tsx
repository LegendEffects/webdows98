import React from "react";
import { WindowProvider } from "../../../../contexts/WindowContext";
import IWindow from "../../../../interfaces/IWindow";
import WindowFrame, { WindowFrameProps } from "./WindowFrame";

export interface WindowProps extends WindowFrameProps  {
  window: IWindow;
}

const Window: React.FC<WindowProps> = ({ window, ...props }) => {
  return (
    <WindowProvider window={window}>
      <WindowFrame {...props}>
        <window.frame.component />
      </WindowFrame>
    </WindowProvider>
  );
}

export default Window;