import IWindowFrame from "./IWindowFrame";

export interface ICreateWindowFrame extends Partial<IWindowFrame> {
  title: string;
  icon: string;
  
  width: number;
  height: number;
}

export default interface ICreateWindow {
  frame: ICreateWindowFrame;
  visible?: boolean;
}