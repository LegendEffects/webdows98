import IBaseApplication from "../interfaces/IBaseApplication";
import IWindow from "../interfaces/IWindow";

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