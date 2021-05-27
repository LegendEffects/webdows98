import React from "react";
import { useSystem } from "../../../../contexts/SystemContext";
import { WindowProvider } from "../../../../contexts/WindowContext";
import ActionType from "../../../../interfaces/ActionType";
import IWindow from "../../../../interfaces/IWindow";
import WindowFrame from "./structure/WindowFrame";
import WindowTitleBar from "./structure/WindowTitleBar";

export interface WindowProps  {
  window: IWindow;
  z: number;
}

const Window: React.FC<WindowProps> = ({ children, window, ...props }) => {
  const [state, dispatch] = useSystem();

  return (
    <WindowProvider window={window}>

      <WindowFrame 
        data-uuid={window.uuid}
        focused={window.uuid === state.focusedWindow}

        onMouseDown={() => {
          dispatch({
            type: 'SET_FOCUSED',
            uuid: window.uuid
          });
        }}

        {...window.frame}
        {...props}
        >
        <WindowTitleBar
          {...window.frame}
          onAction={(action) => {
            switch(action) {
              case ActionType.MINIMIZE:
                dispatch({
                  type: 'SET_VISIBILITY',
                  uuid: window.uuid,
                  value: false,
                });
                break;

              case ActionType.RESTORE:
                dispatch({
                  type: 'TOGGLE_DOCKED',
                  uuid: window.uuid,
                });
                break;
            }
          }}
          availableActions={window.frame.actions}
          />

          <window.frame.component />
      </WindowFrame>

    </WindowProvider>
  );
}

export default Window;