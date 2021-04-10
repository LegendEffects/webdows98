import React from "react";
import { WindowProvider } from "../../../../contexts/WindowContext";
import IWindow from "../../../../interfaces/IWindow";
import WindowFrame from "./WindowFrame";

export interface WindowFrameProps {
  window: IWindow;
}

const Window: React.FC<WindowFrameProps> = ({ window }) => {
  return (
    <WindowProvider window={window}>
      <WindowFrame />
    </WindowProvider>
  );
}

export default Window;