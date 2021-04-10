import IDragDetails from "./IDragDetails";

export default interface IWindowFrame {
  title: string;
  icon: string;
  
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