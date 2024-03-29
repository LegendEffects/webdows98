import DragType from "../DragType";
import ILocation from "../ILocation";
import IWindow from "../IWindow";

export default interface ISystemState {
  windows: IWindow[];
  volume: number;

  dragging?: {
    type: DragType;
    mousePos: ILocation;
    targetUuid?: string; // UUID of the target window
    target?: IWindow;
  },
  focusedWindow?: string;
}