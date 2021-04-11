import React from "react";
import IWindow from "../interfaces/IWindow";
import ISystemState from "../interfaces/state/ISystemState";
import { v4 as uuidv4 } from "uuid";
import ILocation from "../interfaces/ILocation";
import DragType from "../interfaces/DragType";

type SystemAction = 
  | { type: 'createWindow',  window: Omit<IWindow, 'uuid'>                     }
  | { type: 'toggleDocked',  uuid:  string                                     }
  | { type: 'setDocked',     uuid:  string, value: boolean                     }
  | { type: 'setVisibility', uuid:  string, value: boolean                     }
  | { type: 'setLocation',   uuid:  string, x: number, y: number               }
  | { type: 'setSize',       uuid:  string, width: number, height: number      }
  | { type: 'setFocused',    uuid?: string                                     }
  | { type: 'startDrag',     uuid?: string, action: DragType, mouse: ILocation }
  | { type: 'stopDrag'                                                         }
  ;

const SystemContext = React.createContext<[
  ISystemState,
  React.Dispatch<SystemAction>
]>(undefined as any);

function modifyWindow(state: ISystemState, action: SystemAction & {uuid: string}, modifier: (window: IWindow) => IWindow) {
  const windows = [...state.windows];

  const key = windows.findIndex(window => window.uuid === action.uuid);
  windows[key] = modifier(windows[key]);

  return {
    ...state,
    windows
  }
}

function modifyWindows(state: ISystemState, modifier: (windows: IWindow[]) => IWindow[]) {
  return {
    ...state,
    windows: modifier([...state.windows])
  }
}

function reorderWindows(state: ISystemState, topUuid: string): ISystemState {
  const windows = [...state.windows];

  const withoutTop = windows.filter((w) => w.uuid !== topUuid);
  const topWindow = windows.find((w) => w.uuid === topUuid);

  if(topWindow) {
    withoutTop.push(topWindow)
  }

  return {
    ...state,
    windows: withoutTop
  }
}

function systemReducer(state: ISystemState, action: SystemAction): ISystemState {
  switch(action.type) {
    case 'createWindow':
      return modifyWindows(state, (windows) => {
        const newWindow = {
          ...action.window,
          uuid: uuidv4()
        };
  
        windows.push(newWindow);
        return windows;
      })
    case 'setVisibility':
      return {
        ...modifyWindow(state, action, (window) => {
          window.visible = action.value;
          return window;
        }),
        focusedWindow: (action.value === true) ? action.uuid : undefined,
      };
    case 'toggleDocked':
      return modifyWindow(state, action, (window) => {
        window.frame.docked = !window.frame.docked;
        return window;
      });
    case 'setDocked':
      return modifyWindow(state, action, (window) => {
        window.frame.docked = action.value;
        return window;
      });
    case 'setLocation':
      return modifyWindow(state, action, (window) => {
        window.frame.x = action.x;
        window.frame.y = action.y;
        return window;
      });
    case 'setSize':
      return modifyWindow(state, action, (window) => {
        window.frame.width = action.width;
        window.frame.height = action.height;
        return window;
      });
    case 'setFocused':
      return {
        ...(action.uuid ? reorderWindows(state, action.uuid) : state),
        focusedWindow: action.uuid
      };
    case 'startDrag':
      const target = (!action.uuid) ? undefined : state.windows.find((w) => w.uuid === action.uuid);

      return {
        ...state,
        dragging: {
          type:       action.action,
          mousePos:   action.mouse,
          targetUuid: action.uuid,
          target
        }
      };
    case 'stopDrag':
      return {
        ...state,
        dragging: undefined
      }
    default:
      return state;
  }
}

export function SystemProvider({ children }: { children: React.ReactNode }) {
  const value = React.useReducer(systemReducer, {
    windows: [],
    volume: 1,
  });

  return (
    <SystemContext.Provider value={value}>
      {children}
    </SystemContext.Provider>
  )
}

export function useSystem() {
  const context = React.useContext(SystemContext);

  if(context === undefined) {
    throw new Error('useSystem must be used within a SystemProvider');
  }

  return context;
}