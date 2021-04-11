import React from "react";
import IApplicationDetails from "../interfaces/IApplicationDetails";
import IWindow from "../interfaces/IWindow";

interface IBaseApplication {
  details: IApplicationDetails;
  component: React.FC;
}

const defaultFrame= {
  x: 0,
  y: 0,
  width: 300,
  height: 200,
  actions: {
    minimize: true,
    restore: true,
    close: true
  },

  docked: false,
  dragging: false,
  resizing: false,
  dragDetails: null,
  resizable: true,
}

export default function createApplicationInstance({ details, component }: IBaseApplication): Omit<IWindow, 'uuid'> {
  const frame: IWindow['frame'] = Object.assign({}, defaultFrame, details, {
    component
  });

  return {
    visible: true,
    frame
  }
}