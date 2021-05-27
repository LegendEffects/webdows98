import React from "react";
import IUser from "../interfaces/IUser";

export interface IUserState {
  authenticated: boolean;
  user: IUser | null;
}

type UserAction =
  | { type: 'SET_USER', value: IUser | null }
  | { type: 'LOGOUT'                        }
  ;

export const UserContext = React.createContext<[
  IUserState,
  React.Dispatch<UserAction>
]>(undefined as any);

function userReducer(state: IUserState, action: UserAction): IUserState {
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        authenticated: true,
        user: action.value
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
        user: null
      }
    default:
      return state;
  }
}

export const UserProvider: React.FC = ({ children }) => {
  const value = React.useReducer(userReducer, {
    authenticated: false,
    user: null
  });

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = React.useContext(UserContext);

  if(context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}

