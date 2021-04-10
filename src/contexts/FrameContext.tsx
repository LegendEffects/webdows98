import React from 'react';
import ILocation from '../interfaces/ILocation';

export enum CloseOperation {
  DO_NOTHING_ON_CLOSE,
  MINIMIZE_ON_CLOSE,
  EXIT_ON_CLOSE,
}

export interface IDragDetails {
  mouse: ILocation;
  offset: ILocation;
}

export interface IFrameState {
  title: string;
  
  width: number;
  height: number;
  
  x: number;
  y: number;
  z: number;
  
  dragging: boolean;
  dragDetails: null | IDragDetails;

  resizable: boolean;

  actions: {
    minimize: boolean
    restore: boolean
    close: boolean
  };
}

type FrameAction =
  | { type: 'setTitle',      title: string                 }
  | { type: 'setResizable',  resizable: boolean            }
  | { type: 'stopDragging'                                 }
  | { type: 'startDragging', details: IDragDetails         }
  | { type: 'setX',          x: number                     }
  | { type: 'setY',          y: number                     }
  | { type: 'setZ',          z: number                     }
  | { type: 'setLocation',   x: number, y: number          }
  | { type: 'setWidth',      width: number,                }
  | { type: 'setHeight',     height: number,               }
  | { type: 'setSize',       width: number, height: number }
  ;

  
const FrameContext = React.createContext<[
  IFrameState,
  React.Dispatch<FrameAction>
]>(undefined as any);

function frameReducer(state: IFrameState, action: FrameAction): IFrameState {
  switch(action.type) {
    case 'setTitle':
      return { ...state, title: action.title };
    case 'setResizable':
      return { ...state, resizable: action.resizable};
    case 'setX':
      return { ...state, x: action.x };
    case 'setY':
      return { ...state, y: action.y };
    case 'setZ':
      return { ...state, z: action.z };
    case 'setLocation':
      return { ...state, x: action.x, y: action.y };
    case 'setWidth':
      return { ...state, width: action.width };
    case 'setHeight':
      return { ...state, height: action.height };
    case 'setSize':
      return { ...state, width: action.width, height: action.height };
    case 'stopDragging':
      return { 
        ...state,
        dragging: false,
        dragDetails: null
      };
    case 'startDragging':
      return {
        ...state,
        dragging: true,
        dragDetails: action.details
      }
    default:
      return state;
  }
}

export function FrameProvider({ frame, children }: { frame: IFrameState, children?: React.ReactNode }) {
  const value = React.useReducer(frameReducer, frame);

  return (
    <FrameContext.Provider value={value}>
      {children}
    </FrameContext.Provider>
  )
}


export function useFrame() {
  const context = React.useContext(FrameContext);

  if(context === undefined) {
    throw new Error('useFrame must be used within a FrameProvider');
  }

  return context;
}

