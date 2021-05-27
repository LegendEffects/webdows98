import React from "react";
import IWindow from "../interfaces/IWindow";
import ISystemState from "../interfaces/state/ISystemState";
import { v4 as uuidv4 } from "uuid";
import ILocation from "../interfaces/ILocation";
import DragType from "../interfaces/DragType";

type SystemAction = 
  | { type: 'CREATE_WINDOW',  window: Omit<IWindow, 'uuid'>, focus?: boolean    }
  | { type: 'TOGGLE_DOCKED',  uuid:  string                                     }
  | { type: 'SET_DOCKED',     uuid:  string, value: boolean                     }
  | { type: 'SET_VISIBILITY', uuid:  string, value: boolean                     }
  | { type: 'SET_LOCATION',   uuid:  string, x: number, y: number               }
  | { type: 'SET_SIZE',       uuid:  string, width: number, height: number      }
  | { type: 'SET_FOCUSED',    uuid?: string                                     }
  | { type: 'START_DRAG',     uuid?: string, action: DragType, mouse: ILocation }
  | { type: 'STOP_DRAG'                                                         }
  ;

export const SystemContext = React.createContext<[
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

// function modifyWindows(state: ISystemState, modifier: (windows: IWindow[]) => IWindow[]) {
//   return {
//     ...state,
//     windows: modifier([...state.windows])
//   }
// }

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
    case 'CREATE_WINDOW':
      const uuid = uuidv4();
      const windows = [...state.windows];

      windows.push({
        ...action.window,
        uuid
      });

      return {
        ...state,
        windows,
        focusedWindow: (action.focus ? uuid : state.focusedWindow)
      }
    case 'SET_VISIBILITY':
      return {
        ...modifyWindow(state, action, (window) => {
          window.visible = action.value;
          return window;
        }),
        focusedWindow: (action.value === true) ? action.uuid : undefined,
      };
    case 'TOGGLE_DOCKED':
      return modifyWindow(state, action, (window) => {
        window.frame.docked = !window.frame.docked;
        return window;
      });
    case 'SET_DOCKED':
      return modifyWindow(state, action, (window) => {
        window.frame.docked = action.value;
        return window;
      });
    case 'SET_LOCATION':
      return modifyWindow(state, action, (window) => {
        window.frame.x = action.x;
        window.frame.y = action.y;
        return window;
      });
    case 'SET_SIZE':
      return modifyWindow(state, action, (window) => {
        window.frame.width = action.width;
        window.frame.height = action.height;
        return window;
      });
    case 'SET_FOCUSED':
      return {
        ...(action.uuid ? reorderWindows(state, action.uuid) : state),
        focusedWindow: action.uuid
      };
    case 'START_DRAG':
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
    case 'STOP_DRAG':
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