import React from "react";
import IWindow from "../interfaces/IWindow";

const WindowContext = React.createContext<IWindow>(undefined as any);

export function WindowProvider({ window, children }: { window: IWindow, children?: React.ReactNode }) {
  return (
    <WindowContext.Provider value={window}>
      {children}
    </WindowContext.Provider>
  )
}

export function useWindow() {
  const context = React.useContext(WindowContext);

  if(context === undefined) {
    throw new Error('useWindow must be used within a WindowProvider');
  }

  return context;
}
