import React from "react";
import IApplicationDetails from "../interfaces/IApplicationDetails";
import IStartMenuState from "../interfaces/state/IStartMenuState";

type StartMenuAction = 
  | { type: 'ADD_PROGRAM',    details: IApplicationDetails }
  | { type: 'REMOVE_PROGRAM', details: IApplicationDetails }
  | { type: 'TOGGLE_OPEN',    details: IApplicationDetails }
  | { type: 'SET_OPEN',       value: boolean }
  ;

const StartMenuContext = React.createContext<[
  IStartMenuState,
  React.Dispatch<StartMenuAction>
]>(undefined as any);

function startMenuReducer(state: IStartMenuState, action: StartMenuAction) {
  switch(action.type) {
    case 'ADD_PROGRAM':
      state.programs.push(action.details);
      return state;
    case 'REMOVE_PROGRAM':
      return {
        ...state,
        programs: state.programs.filter((program) => program !== action.details)
      };
    case 'SET_OPEN':
      return {
        ...state,
        open: action.value
      };
    case 'TOGGLE_OPEN':
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
}

export function StartMenuProvider({ children }: { children: React.ReactNode }) {
  const value = React.useReducer(startMenuReducer, {
    open: false,
    programs: [],
  });

  return (
    <StartMenuContext.Provider value={value}>
      {children}
    </StartMenuContext.Provider>
  );
}

export function useStartMenu() {
  const context = React.useContext(StartMenuContext);

  if(context === undefined) {
    throw new Error('useStartMenu must be used within a StartMenuProvider');
  }

  return context;
}